'use strict'

import { EasterEgg } from '../'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('easterEgg')

/**
 * <div style="background-color: #cce5ff; color: #004085; padding: 10px 15px; border-radius: 5px;">
 *     You can import Swiper and Slide in one line using below import<br />
 *     <b>import { EasterEgg, EasterEggReveal, EasterEggSummary } from '@/components/EasterEgg/'</b>
 * </div><br />
 * Display the progress of the Easter eggs found on the page.<br />
 * Must be used with the \<EasterEgg\> component.
 */
export default {
    name: 'EasterEggSummary',
    components: {
        EasterEgg
    },
    props: {
        /**
         * Image of the easter eggs that has not yet been found.
         */
        placeholder: {
            type: String,
            required: false
        },

        /**
         * Image of an EasterEgg that has been found.
         */
        foundPlaceholder: {
            type: String,
            require: false
        }
    },
    computed: {
        ...mapState([
            'eggs'
        ]),
        ...mapGetters([
            'eggsCount',
            'eggsFoundCount',
            'allEggsFound',
            'progress'
        ])
    }
}
