export default {
    props: {
        appear: {
            type: [Boolean, Object, Array]
        }
    },
    methods: {
        setupScrollTrigger() {
            const stickyHeight = this.$gsap.getProperty('.sticky', 'height')
            // Define default animation options
            const defaultAnimation = {
                autoAlpha: 0,
                yPercent: 25
            }
            // Merge the default animation options with the passed appear prop
            const animationOptions = this.appear === true ? defaultAnimation : (!this.$config.detectEnv.isMobile ? defaultAnimation : { ...this.appear })
            this.$gsap.timeline({
                defaults: {
                    ease: 'power1.inOut'
                },
                scrollTrigger: {
                    trigger: this.$el,
                    start: stickyHeight ? `top bottom-=${stickyHeight}` : `top bottom`, // Adjust as needed
                    end: stickyHeight ? `bottom-=50% bottom-=${stickyHeight}` : `bottom-=50% bottom`, // Adjust as needed
                    // markers: { startColor: 'blue', endColor: 'magenta' }, // DEBUG
                    toggleActions: 'play none none reverse'
                }
            })
                .from(this.$el, animationOptions)
        },
        initApparitions() {
            if (this.appear) {
                this.setupScrollTrigger()
            }
        }
    },
    mounted() {
        this.$EventBus.$emit('add-animation', this.initApparitions, 'header>', 'apparitions')
    }
}
