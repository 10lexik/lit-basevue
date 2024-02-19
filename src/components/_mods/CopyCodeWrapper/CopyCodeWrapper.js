'use strict'
import CopyCode from '@/components/CopyCode/CopyCode.vue'

import ccCounter from '@/components/CopyCode/ccCounter'

export default {
    name: 'CopyCodeWrapper',
    props: {
        /**
         * If you have multiple codes, you can use code prop<br />
         * If not, just edit the copycode into the i18n file
         */
        code: {
            type: String
        },
        /**
         * Update the text with that prop if you have differents textes<br />
         * If not, just edit the copycode into the i18n file
         */
        text: {
            type: String
        },
        /**
         * The Dumbo button Id to use
         */
        idBtn: {
            type: String
        }
    },
    components: {
        CopyCode
    },
    data: () => ({
        index: 0
    }),
    mounted() {
        this.index = ccCounter
    },
    computed: {
        getText() {
            if (this.text) return this.text
            else return this.$t('copycode.text')
        },
        getButtonLabel() {
            if (this.buttonLabel) return this.buttonLabel
            else return this.$t('copycode.trackingLabel')
        }
    }
}
