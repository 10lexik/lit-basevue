/**
 * HeaderAnimation - Component for header animations.
 */

export default {
    name: 'HeaderAnimation',
    inject: ['getHeaderRef'],
    props: {
        /**
         * Intro animation settings<br />
         * If defined all is animated :)<br />
         * Set here the other props to customize your animation !
         */
        animationIntro: {
            type: [String, Object, Array, Boolean],
            default: null
        },
        /**
         * How my texts will show ! Separately `'default'` or at once `all` <br />
         * It is only the type of text appearance animation you desire.<br />
         * <ul>
         *     <li>`default` <i>(default value)</i></li>
         *     <li>`all`</li>
         * </ul>
         */
        textAppear: {
            type: [String, Boolean],
            default: 'default',
            validator: value => ['default', 'all', false].includes(value)
        },
        /**
         * Indicates if image appearance animation is enabled. `(true by default)`
         */
        imageAppear: {
            type: Boolean,
            default: true
        },
        /**
         * Indicates until where the background should pin.
         */
        pinToElement: {
            type: [String, Boolean],
            default: '.app__container'
        },
        /**
         * Indicates if an overlay effect is enabled.
         */
        overlay: {
            type: Boolean
        },
        /**
         * Indicates if the overlay effect should be animated during scrolling.
         */
        scrollOverlay: {
            type: Boolean
        },
        /**
         * Indicates if the scale should be modified during scrolling.
         */
        scrollScale: {
            type: Boolean
        },
        /**
         * Indicates if blur should be applied during scrolling.
         */
        blurred: {
            type: Boolean
        },
        /**
         * Indicates if background should pin during scrolling.
         */
        pin: {
            type: Boolean
        }
    },
    computed: {
        shouldApplyBlur() {
            return (this.animationIntro.blurred || this.blurred)
        },
        calculateEndTriggerElement() {
            return this.animationIntro && (this.animationIntro.pin || this.animationIntro.pinToElement)
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    watch: {
        animationIntro: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    /**
                     * Enable Scrolling when animations done
                     */
                    this.$emit('animation-intro-set')
                }
            }
        }
    },
    methods: {
        playAnimation() {
            const timeline = this.$gsap.timeline()

            if (this.imageAppear && this.animationIntro !== false) {
                timeline.add(this.imageAppearDefault)
            }

            if (this.textAppear !== false && this.animationIntro !== false) {
                const textAppearConfig = {
                    duration: 0.8,
                    y: 80,
                    autoAlpha: 0,
                    stagger: 0.1,
                    ease: 'power1.inOut'
                }
                const selectedTextAppear = this.textAppear || 'default'

                switch (selectedTextAppear) {
                case 'default':
                    this.animateText(timeline, textAppearConfig)
                    break
                case 'all':
                    this.animateText(timeline, {
                        duration: 1,
                        y: () => window.innerHeight,
                        ease: 'power1.inOut'
                    })
                    break
                default:
                    break
                }
            } else if (this.textAppear === false) {
                timeline.add(() => {
                    this.$enableScroll()
                })
            }
        },
        imageAppearDefault() {
            this.$gsap.from(this.$refs.animationWrapper, {
                duration: 1,
                scale: 0.5,
                ease: 'power1.inOut',
                onComplete: () => {
                    this.initScrollTrigger()
                }
            })
        },
        animateText(timeline, animationConfig) {
            const textAnimationPromise = new Promise((resolve) => {
                this.$gsap.timeline()
                    .from(this.getHeaderRef().querySelectorAll('.header__content > * > *'), {
                        ...animationConfig,
                        onComplete: () => {
                            resolve()
                        }
                    })
            })
            timeline.add(() => {
                textAnimationPromise.then(() => {
                    this.$enableScroll()
                })
            }, 0)
        },
        initScrollTrigger() {
            const clipPathEl = this.$el
            const endTriggerElement = this.calculateEndTriggerElement

            const pinValue = !!endTriggerElement

            const scrollTriggerTimeline = this.$gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.animationWrapper,
                    pin: this.pinToElement ? pinValue : false,
                    scrub: 1,
                    endTrigger: this.pinToElement,
                    anticipatePin: this.pin ? 1 : null,
                    start: 'top top',
                    end: 'top bottom',
                    scroller: window,
                    markers: false
                }
            })
            if (this.shouldApplyBlur) {
                scrollTriggerTimeline.to(clipPathEl, {
                    filter: 'blur(8px)'
                }, 0)
            }
            if (this.scrollScale) {
                scrollTriggerTimeline.to(clipPathEl, {
                    scale: 1.15,
                    transformOrigin: 'center center'
                }, 0)
            }
            if (!this.pin) {
                this.$gsap.set(this.$el, {
                    overflow: 'hidden'
                })
            }
        },
        /// VERY IMPORTANT DO NOT USE init() as a name if your method will be added to timelineManger
        initHeaderAnimation() {
            this.playAnimation()
        }
    },
    mounted() {
        this.$EventBus.$emit('add-animation', this.initHeaderAnimation, 'header>', 'headerAnimation')
    }
}
