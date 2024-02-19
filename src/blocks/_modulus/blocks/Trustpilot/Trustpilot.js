'use strict'

export default {
    name: 'Trustpilot',
    props: {
        /**
         * The main title.
         */
        title: {
            type: [ String, Object, Array ]
        },
        /**
         * Short description.
         */
        text: {
            type: [ String, Object, Array ]
        },
        /**
         * An array of comments or a simple one.
         */
        comment: {
            type: [ String, Object, Array ]
        },
        /**
         * The number rate.
         */
        rating: {
            type: Number,
            validator(value) {
                return value <= 5
            }
        },
        /**
         * The short text with the number of commentators.
         */
        onBased: {
            type: [ String, Object, Array ]
        },
        /**
         * If you need the Trustpilot logo to be white.
         */
        whiteLogo: {
            type: Boolean
        }
    },
    computed: {
        getFullStar() {
            return Math.floor(this.rating)
        },
        getHalfStar() {
            return this.rating % 1 !== 0
        },
        getEmptyStar() {
            return Math.floor(5 - this.rating)
        },
        setLogoUrl() {
            return `trustpilot/logo-${this.whiteLogo ? 'white' : 'black'}.png`
        }
    }
}
