'use strict'

/**
 * <div style="background-color: #cce5ff; color: #004085; padding: 10px 15px; border-radius: 5px;">
 *   This component <b>must</b> be used inside the <a href="#storyviewer">StoryViewer</a> component and bound to the <b>hotspots</b> named slot.
 * </div><br />
 * Displays a clickable spot over the model, with an annotation.
 */
export default {
    name: 'StoryViewerHotspot',
    props: {

        /**
         * Name of the spot, must be unique.
         */
        name: {
            type: String,
            required: true
        },

        /**
         * X Y Z coordinates of the spot.<br />
         * Use this tool to calculate hotspot's position : <a href="https://modelviewer.dev/examples/tester.html">https://modelviewer.dev/examples/tester.html</a>
         */
        position: {
            type: String,
            required: true
        },

        /**
         * Vector specifying the "front" of the tooltip.<br />
         * Use this tool to calculate hotspot's normal : <a href="https://modelviewer.dev/examples/tester.html">https://modelviewer.dev/examples/tester.html</a>
         */
        normal: {
            type: String,
            required: true
        },

        /**
         * Go to a specific timeline value on click.<br />
         * Story duration must be enabled in StoryViewer component for this to work.
         */
        goTo: {
            type: String
        },

        /**
         * If set to `true`, clicking on the spot will toggle the annotation.<br />
         * If not set (or set to `false`), the annotation will be displayed by default and will not be togglable.
         */
        toggleAnnotation: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        showAnnotation: false
    }),
    methods: {
        hotspotClickHandler() {
            this.showAnnotation = !this.showAnnotation
        }
    }
}
