'use strict'

/**
 * Displays product component.
 */
export default {
    name: 'Product',
    props: {
        /**
         * Specifies the product image.
         */
        img: {
            type: String,
            required: true
        },

        /**
         * The Dumbo button Id to use.
         */
        idBtn: {
            type: String
        },

        /**
         * Specifies the title of the product.
         */
        title: {
            type: String
        },

        /**
         * Specifies the text of the product.
         */
        text: {
            type: String
        }
    }
}
