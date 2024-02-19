'use strict'

import Ratings from '@/blocks/_modulus/blocks/Ratings/Ratings.vue'

export default {
    name: 'Cards',
    components: {
        Ratings
    },
    props: {
        /**
         * The variants of the cards. Apply to all cards used in this component.
         * @values edito, info, category, reinsurance, horizontal
         */
        variant: {
            type: String,
            required: true,
            validator: function(value) {
                return ['edito', 'info', 'category', 'reinsurance', 'horizontal'].indexOf(value) !== -1
            }
        },
        /**
         * With that prop you'll have 2 cards on a same line, on mobile.
         */
        isMobRow: {
            type: Boolean
        },
        /**
         * Add shadows around the card to put it forward.
         */
        popIn: {
            type: Boolean
        },
        /**
         * Change the icon of 'ratings' full icon.
         */
        filledIconClass: {
            type: String,
            default: 'icon-star-filled'
        },
        /**
         * Change the icon of 'ratings' half filled icon.
         */
        halfFilledIconClass: {
            type: String,
            default: 'icon-star-half-filled'
        },
        /**
         * Make the stickers rounded.
         */
        stickersRounded: {
            type: Boolean
        },
        /**
         * An array of objects. Check bellow properties to see available values.<br />
         * All properties listed bellow are only examples of keys you can use in the cardsList property.
         */
        cardsList: {
            type: Array,
            required: true
        },
        /**
         * Not a property from Cards. Only working inside cardsList prop.<br />
         * Only available for `info` variant.<br />
         * List of stickers, text or icon.<br />
         * Use `{ text: 'label', type: 'smallBody' }` for the text inside the sticker.<br />
         * Use `{ icon: 'icon-beauty_thematic' }` for an icon sticker, using icomoon library.
         */
        stickers: {
            type: Array
        },
        /**
         * Not a property from Cards. Only working inside cardsList prop.<br />
         * Only available for `info` variant.<br />
         * The rating of the card.
         */
        ratings: {
            type: Number
        },
        /**
         * Not a property from Cards. Only working inside cardsList prop.<br />
         * The id button from Dumbo to get the tracking and the redirection.
         */
        id: {
            type: String
        },
        /**
         * Not a property from Cards. Only working inside cardsList prop.<br />
         * The title for the card.
         */
        title: {
            type: [ String, Object, Array ]
        },
        /**
         * Not a property from Cards. Only working inside cardsList prop.<br />
         * Only available for `info` variant.<br />
         * Some subtitle for the card.
         */
        subtitle: {
            type: [ String, Object, Array ]
        },
        /**
         * Not a property from Cards. Only working inside cardsList prop.<br />
         * Text for the card.
         */
        text: {
            type: [ String, Object, Array ]
        }
    }
}
