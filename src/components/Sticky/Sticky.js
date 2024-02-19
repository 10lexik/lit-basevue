'use strict'

export default {
    name: 'Sticky',
    data: () => ({
        heightSticky: null
    }),
    props: {
        type: {
            type: String,
            default: 'middle',
            validator: function(value) {
                return ['pop-in', 'middle', 'full'].indexOf(value) !== -1
            }
        },
        position: {
            type: String,
            default: 'bottom',
            validator: function(value) {
                return ['bottom', 'top'].indexOf(value) !== -1
            }
        },
        trigger: {
            type: String,
            default: '.app__container'
        },
        endTrigger: {
            type: String,
            default: null
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    computed: {
        sticky() {
            return this.$el
        },
        wrapper() {
            return this.sticky.querySelector('.sticky__wrapper')
        },
        endTriggerResult() {
            let result
            result = this.endTrigger === null ? this.sticky : this.endTrigger
            return result
        },
        isSlot() {
            console.log(this.$slot)
            return this.$slot
        }
    },
    methods: {
        initSticky() {
            this.heightSticky = this.$gsap.getProperty(this.wrapper, 'height')
            if (this.endTrigger !== false) {
                this.$gsap.set(this.sticky, { height: this.heightSticky }) // Set height of sticky
            }
            this.$gsap.timeline({
                scrollTrigger: {
                    trigger: this.trigger,
                    endTrigger: this.endTriggerResult,
                    start: `top+=${this.offset} bottom`,
                    end: `${this.position} ${this.position}`,
                    scroller: document.body,
                    immediateRender: true,
                    invalidateOnRefresh: true,
                    onEnter: () => this.stickyIn(),
                    onLeave: () => this.stickyOut(),
                    onEnterBack: () => this.stickyIn(),
                    toggleActions: 'play none none reverse'
                }
            })
                .fromTo(this.wrapper, { [this.position]: -this.heightSticky, autoAlpha: 0 }, { autoAlpha: 1, [this.position]: 0, ease: 'power1.inOut' }, 0)
        },
        stickyIn() {
            this.$gsap.set(this.wrapper, { position: 'fixed', [this.position]: 0, left: 0 })
        },
        stickyOut() {
            if (this.endTrigger === null) { // default behavior
                this.$gsap.set(this.wrapper, { position: 'relative', [this.position]: 'auto', left: 'auto' })
            } else { // if endTrigger is set
                this.$gsap.set(this.wrapper, { position: 'fixed', [this.position]: -this.heightSticky, left: 0 })
            }
        }
    },
    mounted() {
        this.$EventBus.$emit('add-animation', this.initSticky, '>=0')
    }
}
