'use strict'
import common from '../../../../js/conf/common'

/**
 * Timer module with countdown to the end of sale/discount. Included animation shrinks and sticks the timer on the top of the screen
 */
export default {
    name: 'Timer',
    props: {
        /**
         * Specifies the sale opening date.<br />
         * Example : December 31, 2020 23:24:00
         */
        date: {
            type: String,
            default: common.operation.date
        },
        /**
         * path to top icon if needed
         */
        icon: {
            type: String
        },
        /**
         * title text if needed
         */
        title: {
            type: String
        },
        /**
         * title text if Timer is nested in another component
         */
        timerTitle: {
            type: String
        },
        /**
         * If the countdown has to include the number of remaining days
         */
        days: {
            type: Boolean,
            default: false
        },
        /**
         * If the countdown has to include a description for each value 'days / hours / minutes / seconds'
         */
        timerLabels: {
            type: Boolean,
            default: false
        },
        /**
         * If the timer update its style once we reach it
         */
        timerShrink: {
            type: Boolean,
            default: true
        },
        /**
         * If the timer should be centered when shrunk
         */
        center: {
            type: Boolean
        }
    },
    data: () => ({
        timer: {
            day: '00',
            hour: '00',
            minute: '00',
            second: '00'
        },
        done: false, // you can use this data to do some tricks when the countDown is done or not
        alt: false,
        failSafe: 0
    }),
    beforeMount() {
        this.updateTimer()
    },
    computed: {
        clockHeight() {
            return this.$refs.timerClock.$el.offsetHeight / 2
        },
        elHeight() {
            return this.$el.offsetHeight
        },
        newHeight() {
            return this.clockHeight + 1 * this.elHeight // add 100% of parent height to elHeight
        },
        resultInPercentage() {
            return (this.newHeight / this.elHeight) * 100
        }
    },
    methods: {
        updateTimer() {
            let openingSaleDate = new Date(this.date)
            let currentDate = this.$store.state.general.currentDate
            console.log(openingSaleDate)

            if (currentDate < openingSaleDate) {
                let diff = Math.floor(openingSaleDate - currentDate) / 1000

                // If you don't want one of those params, just comment it and remove it from Countdown.vue
                var struct = {
                    // year: 31536000,
                    // month: 2592000,
                    // week: 604800,
                    day: 86400,
                    hour: 3600,
                    minute: 60,
                    second: 1
                }
                if (!this.days) {
                    delete this.timer.day
                    delete struct.day
                }
                let thisCmpnt = this
                Object.keys(struct).forEach(key => {
                    thisCmpnt.timer[key] = Math.floor(diff / struct[key])
                    diff -= thisCmpnt.timer[key] * struct[key]
                    if (thisCmpnt.timer[key] < 10) thisCmpnt.timer[key] = `0${thisCmpnt.timer[key]}`
                })
            } else {
                this.done = true
            }
            return currentDate > openingSaleDate
        },
        timerAnimation() {
            const timeline = this.$gsap.timeline({
                defaults: {
                    ease: 'none'
                },
                scrollTrigger: {
                    trigger: this.$el,
                    markers: false,
                    start: 'top top',
                    end: '+=100% top',
                    endTrigger: document.body,
                    pin: this.$el.children,
                    pinSpacing: false,
                    scroller: document.body,
                    immediateRender: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    toggleActions: 'play none none reverse'
                }
            })
            if (this.timerShrink) {
                timeline
                    .to(this.$el.querySelector('.timer__container'), {
                        height: 'auto'
                    }, 0)
                    .to(this.$refs.timerClock.$el, {
                        duration: 0.25,
                        scale: 0,
                        width: 0,
                        height: 0,
                        autoAlpha: 0
                    }, 0)
                    .fromTo(this.$refs.timerClockInline.$el, {
                        scale: 0,
                        autoAlpha: 0,
                        width: 0,
                        margin: 0,
                        padding: 0
                    }, {
                        autoAlpha: 1,
                        scale: 1.2,
                        width: window.getComputedStyle(this.$refs.timerClockInline.$el).width,
                        height: window.getComputedStyle(this.$refs.timerClockInline.$el).height,
                        padding: window.getComputedStyle(this.$refs.timerClockInline.$el).padding,
                        margin: window.getComputedStyle(this.$refs.timerClockInline.$el).margin
                    }, 0)
                    .fromTo(this.$refs.timeTitle.$el.querySelector('p'), {
                        fontSize: '90%'
                    }, {
                        fontSize: '0%',
                        autoAlpha: 0
                    }, 0)
                    .fromTo(this.$el.querySelectorAll('.time__type > p'), {
                        fontSize: '60%'
                    }, {
                        fontSize: '0%',
                        paddingBottom: 0,
                        autoAlpha: 0
                    }, 0)
                    .fromTo(this.$el.querySelector('.timer__container__inner--bg'), {
                        height: `${this.resultInPercentage}%`
                    }, {
                        height: '100%'
                    }, 0)
                    .to(this.$el.querySelector('.timer__container__inner'), {
                        paddingLeft: 0
                    }, 0)
                if (this.center && this.$config.detectEnv.isDesktop) {
                    const timerContainerWrapper = this.$el.querySelector('.timer__container--wrapper')
                    timeline
                        .to(timerContainerWrapper, {
                            x: ((window.innerWidth / 2) - (timerContainerWrapper.clientWidth / 2)) - timerContainerWrapper.getBoundingClientRect().x
                        }, 0)
                }
            } else {
                timeline
                    .set(this.$refs.timerClockInline.$el, {
                        display: 'none',
                        autoAlpha: 0
                    })
                    .set(this.$refs.timeTitle.$el.querySelector('p'), {
                        fontSize: '90%'
                    }, 0)
                    .set(this.$el.querySelectorAll('.time__type > p'), {
                        fontSize: '60%'
                    }, 0)
                    .to(this.$el.querySelector('.timer__container'), {
                        scale: 0.75,
                        transformOrigin: 'center 15%'
                    }, 0)
            }
        }
    },
    mounted() {
        this.$EventBus.$emit('add-animation', this.timerAnimation, 'offer+=1', 'timer')
        let thisCmpnt = this
        let countDownInterval = setInterval((_) => {
            let done = thisCmpnt.updateTimer()

            if (done) { // if current date > opening sale date
                clearInterval(countDownInterval)
            }
        }, 1000)
    }
}
