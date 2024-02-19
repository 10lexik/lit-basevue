'use strict'

/**
 * Displays an image inside a block container<br />
 * Img is globally loaded, so you don't need to import it when you create a new block.
 */
export default {
    name: 'Img',
    props: {
        /**
         * Specifies the path to the image.<br />
         * The path is either absolute (http://...) or relative to the `@/assets/img/` folder
         */
        src: {
            type: String,
            required: true
        },

        /**
         * Specifies an alternate text for the image.
         */
        alt: {
            type: String
        },

        /**
         * Converts a SVG image into an inline svg.
         */
        inlineSvg: {
            type: Boolean
        },

        /**
         * Centers the image in its container.
         */
        center: {
            type: Boolean
        }
    },
    data: () => ({
        requiredSrc: ''
    }),
    computed: {
        imgClasses() {
            let cssClasses = []

            if (this.center) cssClasses.push('img-mod--center')

            return cssClasses
        }
    },
    beforeMount() {
        if (this.src.indexOf('http') !== -1) {
            this.requiredSrc = this.src // if the image is external
        } else {
            this.requiredSrc = require(`@/assets/img/${this.src}`)
        }
    },
    mounted() {
        this.$emit('img-has-mounted', this.$el.querySelector('img'))
    }
}
