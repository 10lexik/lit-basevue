'use strict'

/**
 * Displays stars, to show the rate of something (product, trip, ...)
 */
export default {
    name: 'Rating',
    data: () => ({
        nbFilledFavorites: 0,
        nbEmptyFavorites: 0,
        isHalfNote: false
    }),
    props: {
        /**
         * Specifies the rate.<br />
         * The value can be an integer or a float, like : 4 or 4.5<br />
         * If it's a float number, then a half star is setted
         */
        rate: {
            type: Number,
            default: 5
        },

        /**
         * Only to set if you want to show empty stars.<br />
         * It specifies the max rate.<br />
         * The value has to be higher than the rate prop
         */
        max: {
            type: Number
        }
    },
    beforeMount() {
        if (!Number.isInteger(this.rate)) {
            this.isHalfNote = true
        }
        this.nbFilledFavorites = (this.isHalfNote) ? Math.trunc(this.rate) : this.rate

        if (this.max && this.max > this.nbFilledFavorites) {
            this.nbEmptyFavorites = this.max - this.nbFilledFavorites
            if (this.isHalfNote) this.nbEmptyFavorites--
        }
    }
}
