'use strict'

import ccCounter from './ccCounter'

export default {
    name: 'CopyCode',
    props: {
        /**
         * If you have multiple codes, you can use code prop<br />
         * If not, just edit the copycode into the i18n file
         */
        code: {
            type: String
        }
    },
    data: () => ({
        index: 0,
        copied: false,
        showMsg: false
    }),
    mounted() {
        ccCounter++
        this.index = ccCounter
    },
    computed: {
        getCode() {
            if (this.code) return this.code
            else return this.$t('copycode.code')
        }
    },
    methods: {
        handleCopy() {
            let code = document.querySelector(`.copycode--${this.index} .copycode__button__txt`).innerHTML.replace(/ /g, '') // '/ ' is for whitespaces and 'g' is for "global" so all whitespaces are replaced.Fastest way to do that.
            let el = document.createElement('textarea')
            el.value = code
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)
            this.copied = true
            this.showMsg = true
            setTimeout((_) => {
                this.showMsg = false
            }, 1000)
        }
    }

}
