'use strict'
import galleryCounter from './galleryCounter'

import Video from '@/components/Video/Video.vue'

export default {
    name: 'Gallery',
    components: {
        Video
    },
    props: {
        /**
         * Images list of the gallery
         */
        img: {
            type: Array
        },
        /**
         * Videos list of the gallery
         */
        video: {
            type: Array
        },
        /**
         * Shifted positions
         */
        shifted: {
            type: Boolean
        },
        /**
         * Animate the images
         */
        animate: {
            type: Boolean
        },
        /**
         * Parallax effect on images
         */
        parallax: {
            type: Boolean
        },
        /**
         * Title of the gallery
         */
        title: {
            type: String
        },
        /**
         * Subtitle of the gallery
         */
        subtitle: {
            type: String
        }
    },
    data() {
        return {
            id: `gallery${galleryCounter++}`,
            mediaMounted: 0,
            newMedia: []
        }
    },
    watch: {
        mediaMounted(mediaLoaded) {
            if (mediaLoaded === this.media.length) {
                this.$EventBus.$emit('add-animation', this.updateGallerySettingsBasedOnQuery, 'apparitions>', 'gallery')
            }
        }
    },
    computed: {
        stickyHeight() {
            return this.$gsap.getProperty('.sticky', 'height')
        },
        timeline() {
            const galleryWrapper = this.$refs[`${this.id}galleryWrapper`]
            return this.$gsap.timeline({
                defaults: {
                    ease: 'none'
                },
                scrollTrigger: {
                    markers: false,
                    trigger: galleryWrapper, // use found galleryWrapper reference here
                    scrub: this.$config.detectEnv.isMobile ? 1 : true,
                    start: this.$config.detectEnv.isDesktop ? `top center+=${this.stickyHeight}` : `top center`,
                    end: this.$config.detectEnv.isDesktop ? `bottom-=${this.stickyHeight} center+=${this.stickyHeight}` : `bottom center`
                }
            })
        },
        media() {
            if (this.img && this.img.length > 0) {
                return this.img
            } else if (this.video && this.video.length > 0) {
                return this.video
            } else {
                return []
            }
        }
    },
    methods: {
        mMounted(index, media) {
            this.mediaMounted++
            this.$set(this.media[index], 'el', media)
            this.newMedia.push(this.media[index])
        },
        getMediaRef(index) {
            let refType = this.newMedia[index]?.el.tagName // Get the tag name of the element
            if (refType) {
                refType = refType.toLowerCase()
                return this.$refs[`${this.id}galleryWrapper${refType.charAt(0).toUpperCase() + refType.slice(1)}${index}`]
            }
            return null
        },
        applyToMedia(operation) {
            this.newMedia.forEach(operation)
        },
        updateGallerySettingsBasedOnQuery() {
            const hasParallaxAndShifted = this.parallax && this.shifted
            const hasParallaxAndAnimate = this.parallax && this.animate
            const hasAnimateAndShifted = this.animate && this.shifted
            const timeline = this.$gsap.timeline()
            if (this.shifted) {
                this.applyYpercent()
            }
            if (hasParallaxAndShifted || hasParallaxAndAnimate || this.parallax) {
                this.parallaxMedia()
            }
            if (this.animate && !hasParallaxAndAnimate && !hasAnimateAndShifted) {
                this.animateMediaShifted()
            }
            if (!this.parallax && !this.shifted && !this.animate) {
                this.setPaddings()
            }
            if (hasParallaxAndShifted && !this.animate) {
                this.parallaxMediaShifted()
            }
            if (hasAnimateAndShifted && !this.parallax) {
                timeline.add(this.animateMediaShifted)
            }
            if (hasParallaxAndShifted && this.animate) {
                timeline
                    .add(this.animateMediaShifted)
                    .add(this.parallaxMediaShifted)
            }
            if (!this.shifted && hasParallaxAndAnimate) {
                timeline
                    .add(this.parallaxMedia)
                    .add(this.animateMediaShifted)
            }
        },
        setPaddings() {
            this.$gsap.set(this.$el.children, { padding: 0 })
        },
        applyYpercent() {
            let yPercent = this.$config.detectEnv.isDesktop ? -7.5 : -10
            this.applyToMedia((media, index) => {
                let mediaRef = this.getMediaRef(index)
                this.$gsap.set(mediaRef, { yPercent })
                // yPercent += 5
                if (this.$config.detectEnv.isDesktop) {
                    yPercent += 5
                } else {
                    yPercent = (index % 2 === 0) ? 10 : -10
                }
            })
        },
        parallaxMedia() {
            this.applyToMedia(galleryWrapper => {
                this.timeline
                    .fromTo(galleryWrapper.el, {
                        transformOrigin: 'center center',
                        scale: 1.2,
                        yPercent: !this.animate && !this.shifted && this.parallax ? -15 : 15
                    }, { yPercent: -5 }, 0)
            })
        },
        animateMediaShifted() {
            if (!this.animate) return

            if (this.$config.detectEnv.isDesktop) {
                this.applyToMedia((galleryWrapper, index) => {
                    let mediaRef = this.getMediaRef(index)
                    // this.timeline
                    // .fromTo(galleryWrapper.el, { yPercent: 10 }, { yPercent: 0, overwrite: 'auto' }, 0)
                    if (index === 0) {
                        this.timeline
                            .to(mediaRef, { yPercent: 7.5, overwrite: 'auto' }, 0)
                    } else {
                        this.timeline
                            .to(mediaRef, { yPercent: -index * 5, overwrite: 'auto' }, '<')
                    }
                })
            } else {
                this.applyToMedia((selector, index) => {
                    let mediaRef = this.getMediaRef(index)
                    const yPercent = (index % 2 === 0) ? 10 : -10
                    this.timeline.to(mediaRef, { yPercent }, 0)
                })
            }
        },
        parallaxMediaShifted() {
            if (!this.parallax) return
            this.applyToMedia((pair, index) => {
                const yPercent = this.$config.detectEnv.isMobile ? (index % 2 === 0) ? 10 : -10 : 10
                const toYPercent = this.$config.detectEnv.isMobile ? (index % 2 === 0) ? -10 : 10 : 0
                this.timeline.fromTo(pair.el, { yPercent }, { yPercent: toYPercent, overwrite: 'auto' }, 0)
            })
        }
    }
}
