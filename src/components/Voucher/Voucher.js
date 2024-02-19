'use strict'

export default {
    name: 'Voucher',
    props: {
        /**
         * Provide the SRC of the voucher (external or internal link)
         * Ex: 'https://www.veepee.fr/voucher.pdf' or 'docs/voucher.pdf'
         * (If internal link, put the PDF in the public folder)
         */
        src: {
            type: String,
            required: true
        },
        /**
         * Tracking ID from DUMBO, for Mixpanel
         */
        idBtn: {
            type: String,
            required: true
        }
    }
}
