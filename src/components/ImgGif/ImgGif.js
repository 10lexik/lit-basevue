'use strict'

/**
 * Display a list of images as if it was an animated gif, particularly useful to simulate a transparent background gif
 */
export default {
    name: 'ImgGif',
    data() {
        return {
            /**
             * index of the currently visible image
             */
            currentIndex: 0
        }
    },
    props: {
        /**
         * Array containing each images' source, the first one is also used for the ghost placeholder
         */
        imgs: {
            type: Array,
            required: true
        },
        /**
         * For fading transitions
         */
        fader: {
            type: Boolean,
            default: false
        },
        /**
         * Time spent between each image transition, set in milliseconds
         */
        speed: {
            type: Number,
            default: 2500
        }
    },
    methods: {
        /**
         * transition time initialisation
         */
        init: function() {
            setInterval(() => { this.imgSwitch() }, this.speed)
        },
        /**
         * currentIndex incrementation
         */
        imgSwitch: function() {
            console.log('>> imgSwitch >>')
            if (this.currentIndex + 1 === this.imgs.length) {
                this.currentIndex = 0
            } else {
                this.currentIndex++
            }
        }
    },
    mounted() {
        this.init()
    }
}
