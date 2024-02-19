'use strict'

import VueScrollTo from 'vue-scrollto'

/**
 * <div style="background-color: #cce5ff; color: #004085; padding: 10px 15px; border-radius: 5px;">
 *     You can import StoryViewer, StoryViewerHotspot and StoryViewerPopin in one line using below import<br />
 *     <b>import { StoryViewer, StoryViewerHotspot, StoryViewerPopin } from '@/components/StoryViewer/'</b>
 * </div><br />
 * Displays a 3D model using Google's <a href="https://modelviewer.dev/" target="_blank">model-viewer web component</a>.<br />
 * Can be used alongside with the StoryViewerHotspot and the StoryViewerPopin components.
 */
export default {
    name: 'StoryViewer',
    props: {
        /**
         * Source of the 3D file.<br />
         * Works with `.glb` and `.gltf` files<br />
         * This file should be placed in the `public/` folder as it can not be loaded via webpack.
         */
        src: {
            type: String,
            required: true
        },

        /**
         * Image to show while the 3D file is loading
         */
        poster: {
            type: String
        },

        /**
         * 360° background (`.hdr` file).<br />
         * This file should be placed in the `public/` folder as it can not be loaded via webpack.
         */
        skyboxImage: {
            type: String
        },

        /**
         * Reflection image of the model (`.hdr` file).<br />
         * If empty, the skyboxImage will be used for reflection
        */
        environmentImage: {
            type: String
        },

        /**
         * Plays the model's animation (if it has any)
         */
        autoplay: {
            type: Boolean,
            default: false
        },

        /**
         * Gives control of the camera with the mouse/touch screen.
         */
        cameraControls: {
            type: Boolean,
            default: false
        },

        /**
         * Story settings to add interaction when the user scrolls.<br /><br />
         * Available settings:<br />
         * <ul>
         *   <li>`duration` (int) : Story duration in (px)</li>
         *   <li>`showTimeline` (boolean) : Displays scroll progression as a timeline</li>
         *   <li>`showPercent` (boolean) : Displays scroll progression as a percentage</li>
         *   <li>
         *     `orbitCycles` (array) : List of segments of the story. Each segment will have a specific camera settings and movement :
         *     <ul>
         *       <li>`start` (int) : </li>
         *       <li>`end` (int) : </li>
         *       <li>
         *         `cameraOrbit` (string) : Camera position based on 3 values : X angle, Y angle and Zoom.<br />
         *         Angles must be in deg (45deg, 90deg, ...)<br />
         *         You can bind the angles with the scrolling position using calc(). See the example below.<br />
         *         The zoom is a percentage between 45% and 105%. The lower is closer.<br />
         *       </li>
         *       <li>`cameraTarget` (string) : X Y Z coordinates where the camera points. Use the "m" or "cm" units (example : '100m 200m 300m' or set to 'auto auto auto' to target the center of the model</li>
         *     </ul>
         *   </li>
         * </ul>
         */
        story: {
            type: Object
        }
    },
    data: () => ({
        modelViewerWrapper: null,
        modelViewer: null,
        modelViewerWidth: 'auto',
        offsetTop: null,
        offsetHeight: null,
        windowHeight: null,
        scrollTop: null,
        percent: 0,
        timelineSpots: [],
        cameraOrbit: '',
        cameraTarget: 'auto auto auto'
    }),
    computed: {
        hasStory() {
            if (this.story && this.story.duration !== null) {
                this.cameraControls = false
                return true
            } else {
                return false
            }
        },
        isBefore() {
            return this.hasStory && this.percent < 0
        },
        isSticky() {
            return this.hasStory && !this.isBefore && !this.isAfter
        },
        isAfter() {
            return this.hasStory && this.percent > 100
        },
        classes() {
            const classes = []

            if (this.hasStory) classes.push('hasStory')
            if (this.isBefore) classes.push('isBefore')
            if (this.isSticky) classes.push('isSticky')
            if (this.isAfter) classes.push('isAfter')

            return classes.join(' ')
        },
        modelViewerWrapperStyles() {
            const styles = []

            if (this.story && this.story.duration) styles.push(`height: ${this.story.duration}px`)

            return styles.join('; ')
        },
        visiblePercent() {
            let visiblePercent = parseInt(this.percent)

            if (this.percent < 0) visiblePercent = 0
            else if (this.percent > 100) visiblePercent = 100

            return visiblePercent
        }
    },
    methods: {
        init() {
            // Initialize data
            this.modelViewerWrapper = this.$refs.modelViewerWrapper
            this.modelViewerWidth = this.modelViewerWrapper.offsetWidth
            this.modelViewer = this.$refs.modelViewer
            this.offsetTop = this.modelViewerWrapper.offsetTop
            this.offsetHeight = this.modelViewerWrapper.offsetHeight
            this.windowHeight = window.innerHeight
            this.hotspots = this.$slots.hotspots
            this.popins = this.$slots.popins
        },
        scrollHandler() {
            // Computing percentage of the scroll
            this.scrollTop = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop
            this.percent = ((this.scrollTop - this.offsetTop) * 100) / (this.offsetHeight - this.windowHeight)

            // Update camera orbit and target
            this.setCamera()

            // Set popin for the current percentage range
            this.setPopin()
        },
        setupTimelineSpots() {
            if (this.story && this.story.showTimeline && this.hotspots.length > 0) {
                // Loop through each elements in the "hotspots" slot
                this.hotspots.forEach(slot => {
                    // Search for Hotspot components
                    if (slot.componentOptions && slot.componentOptions.tag === 'StoryViewerHotspot') {
                        // Report the spot's information on the timeline
                        this.timelineSpots.push({
                            name: slot.componentOptions.propsData.name,
                            goTo: slot.componentOptions.propsData.goTo
                        })
                    }
                })
            }
        },
        timelineSpotClickHandler(goTo) {
            // Calculate the scrolltop position of the spot
            const scrollOffset = ((this.story.duration - this.windowHeight) * (parseInt(goTo) / 100))

            // scrolTo animation
            VueScrollTo.scrollTo(this.modelViewerWrapper, 2000, {
                easing: 'ease',
                offset: scrollOffset
            })
        },
        setCamera() {
            if (this.story && this.story.orbitCycles.length > 0) {
                // Search for the current orbit we are scolling in (based on progression percentage)
                this.story.orbitCycles.forEach(orbit => {
                    if (
                        this.visiblePercent >= orbit.start &&
                        this.visiblePercent < orbit.end &&
                        (
                            (this.cameraOrbit !== orbit.cameraOrbit) ||
                            (this.cameraTarget !== orbit.cameraTarget)
                        )
                    ) {
                        this.cameraOrbit = orbit.cameraOrbit
                        this.cameraTarget = orbit.cameraTarget
                    }
                })
            }
        },
        setPopin() {
            if (this.story && this.popins.length > 0 && this.visiblePercent > 0 && this.visiblePercent < 100) {
                // Loop through each elements in the "popins" slot
                this.$emit('updatePercent', this.visiblePercent)
            }
        }
    },
    beforeCreate() {
        // Add module script
        const moduleScript = document.createElement('script')
        moduleScript.setAttribute('type', 'module')
        moduleScript.setAttribute('src', 'https://unpkg.com/@google/model-viewer/dist/model-viewer.js')
        document.head.appendChild(moduleScript)

        // Add legacy script
        const legacyScript = document.createElement('script')
        legacyScript.setAttribute('nomodule', true)
        legacyScript.setAttribute('src', 'https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js')
        document.head.appendChild(legacyScript)
    },
    mounted() {
        // Recalculate sizes on browser resize
        window.addEventListener('resize', () => {
            requestAnimationFrame(this.init)
        })
        this.init()

        // Add scroll events
        window.addEventListener('scroll', () => {
            requestAnimationFrame(this.scrollHandler)
        })
        this.scrollHandler()

        // Setup spots for the timeline
        this.setupTimelineSpots()
    }
}
