'use strict'

import vCounter from './vCounter'

/**
 * Adds an external or an imported video.
 * You can import a video in your assets, or call a youtube video (like in the example).
 */

export default {
    name: 'Video',
    props: {
        /**
         * Remove the video from the loading process
         */
        preventLoading: {
            type: Boolean,
            default: false
        },

        /**
         * Only for Youtube videos.<br />
         * Specifies the video ID that you can find in the url of a youtube video.
         */
        videoId: {
            type: String
        },

        /**
         * Only for Youtube videos.<br />
         * Specifies vars, if you need some specific behavior.
         */
        videoVars: {
            type: Object
        },

        /**
         * Only for imported videos, or external videos heberged on our servers.<br />
         * For your local videos, specifies the path from `src/assets/videos` to your video.<br />
         * Example : `your-video.mp4`
         */
        src: {
            type: String
        },

        /**
         * Only for imported videos, or external videos heberged on our servers.<br />
         * For your local videos, specifies the path from `src/assets/videos` to your mobile version of the video.<br />
         * Example : `your-video-mob.mp4`
         */
        srcMob: {
            type: String
        },

        /**
         * Only for imported videos, or external videos heberged on our servers.<br />
         * For your local videos, specifies the path from `src/assets/videos` to your tablet version of the video.<br />
         * Example : `your-video-tab.mp4`
         */
        srcTab: {
            type: String,
            default: function() {
                return this.srcMob
            }
        },

        /**
         * Only for imported videos, or external videos heberged on our servers.<br />
         * For your local videos, specifies the path from `src/assets/videos` to your desktop version of the video.<br />
         * Example : `your-video-desk.mp4`
         */
        srcDesk: {
            type: String
        },

        /**
         * Only for imported videos, or external videos heberged on our servers.<br />
         * Specifies an image to set until the user launch the video.
         */
        poster: {
            type: String
        },

        /**
         * Only for imported videos, or external videos heberged on our servers.<br />
         * Specifies the video's size.
         */
        size: {
            type: [Number, String]
        },

        /**
         * Only for imported videos, or external videos heberged on our servers.<br />
         * Specifies the video's size to your mobile version of the video.
         */
        sizeMob: {
            type: [Number, String]
        },

        /**
         * Only for imported videos, or external videos heberged on our servers.<br />
         * Specifies the video's size to your tablet version of the video.
         */
        sizeTab: {
            type: [Number, String],
            default: function() {
                return this.sizeMob
            }
        },

        /**
         * Only for imported videos, or external videos heberged on our servers.<br />
         * Specifies the video's size to your desktop version of the video.
         */
        sizeDesk: {
            type: [Number, String]
        }
    },
    data: () => ({
        index: 0,
        name: 'video-to-load-0',
        isExternalSrc: false,
        videoSrc: '',
        videoHeight: window.innerWidth * (9 / 16),
        videoPoster: '',
        videoSize: ''
    }),
    beforeMount() {
        vCounter++
        this.index = vCounter
        if (!this.preventLoading) this.name = `video-to-load-${this.index}`

        // Not for Youtube video
        if (!this.videoId) {
            this.setPoster() // Set video poster
            this.checkVideoSize()
            this.setVideoSrc()
        }
    },
    methods: {
        playing(event) {
            this.player = event.target
            // this.$tracking.click('playing')
        },
        ended(event) {
            this.player.stopVideo()
            // this.$tracking.click('stop')
        },
        paused(event) {
            this.player.pauseVideo()
            // this.$tracking.click('pause')
        },
        returnLocalOrExternalPath(src) {
            if (this.isExternalVideo(src)) { // if it's an external link
                this.isExternalSrc = true
                fetch(src, {})
                    .then(res => {
                        this.videoSrc = src
                    })
                    .catch(error => {
                        console.error(error)
                    })
            } else { // if it's a local link
                return require(`@/assets/videos/${src}`)
            }
        },
        setPoster() {
            this.videoPoster = (this.poster) ? require(`@/assets/img/${this.poster}`) : ''
        },
        checkVideoSize() {
            // Skip when preventLoading is true
            if (this.preventLoading) return

            const errors = []

            if (this.src && !this.size && !this.isExternalVideo(this.src)) {
                errors.push(`missing "size" property (src: ${this.src})`)
            }
            if (this.srcMob && !this.sizeMob && !this.isExternalVideo(this.srcMob)) {
                errors.push(`missing "sizeMob" property (src: ${this.srcMob})`)
            }
            if (this.srcTab && !this.sizeTab && !this.isExternalVideo(this.srcTab)) {
                errors.push(`missing "sizeTab" property (src: ${this.srcTab})`)
            }
            if (this.srcDesk && !this.sizeDesk && !this.isExternalVideo(this.srcDesk)) {
                errors.push(`missing "sizeDesk" property (src: ${this.srcDesk})`)
            }

            if (errors.length > 0) {
                errors.unshift('Video component error:')
                console.error(errors.join('\n'))
            }
        },
        setVideoSrc() {
            if (this.srcMob && this.$config.detectEnv.isMobile) {
                this.videoSrc = this.returnLocalOrExternalPath(this.srcMob)
                this.videoSize = this.sizeMob
            } else if (this.srcDesk && this.$config.detectEnv.isDesktop) {
                this.videoSrc = this.returnLocalOrExternalPath(this.srcDesk)
                this.videoSize = this.sizeDesk
            } else if (this.srcTab && this.$config.detectEnv.isTablet) {
                this.videoSrc = this.returnLocalOrExternalPath(this.srcTab)
                this.videoSize = this.sizeTab
            } else {
                this.videoSrc = this.returnLocalOrExternalPath(this.src)
                this.videoSize = this.size
            }
        },
        isExternalVideo: src => src.indexOf('http') === 0
    },
    mounted() {
        document.querySelector(`.${this.name}`).onloadedmetadata = e => {
            this.$emit('video-has-mounted', this.$el.querySelector('video'))
            const video = document.querySelector(`.${this.name}`)
            if (video.getAttribute('data-extsrc')) {
                if (!this.preventLoading) {
                    this.$store.dispatch('loader/progressVideo', { src: this.name, progress: 100 })
                }
                video.play()
            }
        }
    }
}
