'use strict'
import Stacking from '@/blocks/Stacking/Stacking.vue'
import Offer from '@/blocks/_modulus/blocks/Offer/Offer.vue'
import CopyCode from '@/components/CopyCode/CopyCode.vue'

export default {
    name: 'MultiOffer',
    components: {
        Stacking,
        Offer,
        CopyCode
    },
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
         * Specifies a name which can be used as a css class selector inside the <stacking /> template
         */
        name: {
            type: String,
            default: 'multiOffer'
        },
        /**
         * Specifies the title of the MultiOffer
         */
        title: {
            type: [ String, Object, Array ]
        },
        /**
         * Array of offers (using the single Offer component props)
         */
        offers: {
            type: Array
        },
        /**
         * Size for the offer cards, can be either 'big' or 'small'
         */
        size: {
            type: String,
            default: 'big',
            validator: function(value) {
                return ['small', 'big'].indexOf(value) !== -1
            }
        },
        /**
         * To remove shadows on stacked offers
         */
        noShadowsStacked: {
            type: Boolean
        }
    },
    computed: {
        spacingStacking() {
            return this.size === 'small' ? 15 : 45
        }
    }
}
