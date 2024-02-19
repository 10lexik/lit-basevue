'use strict'

import SCheckList from './StyledCheckList'

/**
 * Displays a check list.<br />
 * You just have to create a list, as you can see in the example.
 */
export default {
    name: 'CheckList',
    components: {
        SCheckList
    },
    props: {
        /**
         * Set the list to show. <br />
         * You just need to put the text in the list. The check image is directly setted in the CheckList.vue file
         */
        checkList: {
            type: Array,
            required: true
        },

        /**
         * Specifies the title before the list.
         */
        title: {
            type: String
        },

        /**
         * Specifies the text before the list.
         */
        text: {
            type: String
        },

        /**
         * Set the button.<br />
         * The button can be customized in CheckList.scss, using ::v-deep
         */
        idBtn: {
            type: String
        },

        /**
         * Specifies the background-color<br />
         * You can't use scss variables.
         */
        backgroundColor: {
            type: String
        },

        /**
         * Specifies the text color<br />
         * You can't use scss variables.
         */
        textColor: {
            type: String
        },

        /**
         * Specifies the color of the check image<br />
         * You can't use scss variables.
         */
        checkColor: {
            type: String
        }
    }
}
