'use strict'

export default {
    props: {
        ratings: {
            type: Number,
            default: 5
        },
        filledIconClass: {
            type: String,
            default: 'icon-star-filled'
        },
        halfFilledIconClass: {
            type: String,
            default: 'icon-star-half-filled'
        }
    },
    computed: {
        maxStars() {
            return Math.ceil(this.ratings)
        },
        filledStars() {
            return Math.floor(this.ratings)
        }
    },
    methods: {
        showHalfStar(index) {
            return this.ratings - this.filledStars >= 0.5 && index === this.filledStars
        }
    }
}
