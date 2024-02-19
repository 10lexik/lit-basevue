'use strict'
import CopyCode from '@/components/CopyCode/CopyCode.vue'
import Timer from '@/blocks/_modulus/blocks/Timer/Timer.vue'
import Voucher from '@/components/Voucher/Voucher.vue'
import common from '../../../../js/conf/common'

export default {
    name: 'Offer',
    props: {
        /**
         * Define the style of the offer.<br />
         * Available values :
         * <ul>
         *   <li>`simple` <i>(default value)</i></li>
         *   <li>`bundle`</li>
         * </ul>
        */
        variant: {
            type: String,
            default: 'simple',
            validator: (value) => {
                return ['simple', 'bundle'].indexOf(value) !== -1
            }
        },
        /**
         * Text data to provide for the title space in the default offer
         */
        title: {
            type: [ String, Object, Array ]
        },
        /**
         * Text data to provide for the subtitle space in the default offer
         */
        subtitle: {
            type: [ String, Object, Array ]
        },
        /**
         * Text data to provide for the residual info space in the default offer
         */
        text: {
            type: [ String, Object, Array ]
        },
        /**
         * Text data for the copyCode section title in the default offer
         */
        copyCodeTitle: {
            type: [ String, Object, Array ]
        },
        /**
         * promotional code for the <copyCode/> component in the default offer
         */
        copyCode: {
            type: String
        },
        /**
         * PDF for the voucher component
         */
        voucher: {
            type: [ String, Object, Array ]
        },
        /**
         * path to illustration media file, uses the <Img/> component in the default offer
         */
        img: {
            type: String
        },
        /**
         * tracking Id for bottom cta button in the default offer
         */
        idBtn: {
            type: String
        },
        /**
         * customised css classes for further styling options in the default offer
         */
        customClass: {
            type: String,
            default: ''
        },
        /**
         * allows the Timer component to be displayed
         */
        timer: {
            type: Boolean
        },
        /**
         * Date for the Timer component
         */
        timerDate: {
            type: String,
            default: common.operation.date
        },
        /**
         * Title text for the Timer component
         */
        timerTitle: {
            type: String,
            default: 'Veepee\'s exclu of the day'
        },
        /**
         * Labels after the numbers (Days, Hours, Minutes, Seconds, ...)
         */
        timerLabels: {
            type: Boolean
        },
        /**
         * If the timer update its style once we reach it
         */
        timerShrink: {
            type: Boolean,
            default: true
        },
        /**
         * Define the inline style on desktop only
         */
        row: {
            type: Boolean
        },
        /**
         * Add shadows to the offer wrapper.
         */
        popIn: {
            type: Boolean
        },
        appearChildren: {
            type: [Boolean, Object, Array]
        }
    },
    components: {
        CopyCode,
        Voucher,
        Timer
    }
}
