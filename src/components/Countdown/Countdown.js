'use strict'

import common from '../../js/conf/common'

/**
 * Display a countdown through the date setted in the `src/js/conf/common.js` configuration file.<br />
 * The date can be overridden using the `date` prop.
 */
export default {
    name: 'Countdown',
    props: {
        /**
         * Specifies the sale opening date.<br />
         * Example : December 31, 2020 23:24:00
         */
        date: {
            type: String,
            default: common.operation.date
        }
    },
    data: () => ({
        timer: {
            day: '00',
            hour: '00',
            minute: '00',
            second: '00'
        },
        done: false // you can use this data to do some tricks when the countDown is done or not
    }),
    beforeMount() {
        this.updateTimer()
    },
    mounted() {
        let thisCmpnt = this
        let countDownInterval = setInterval((_) => {
            let done = thisCmpnt.updateTimer()

            if (done) { // if current date > opening sale date
                clearInterval(countDownInterval)
            }
        }, 1000)
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
        }
    }
}
