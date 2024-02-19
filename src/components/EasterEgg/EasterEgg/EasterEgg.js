'use strict'

import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('easterEgg')

/**
 * <div style="background-color: #cce5ff; color: #004085; padding: 10px 15px; border-radius: 5px;">
 *     You can import Swiper and Slide in one line using below import<br />
 *     <b>import { EasterEgg, EasterEggReveal, EasterEggSummary } from '@/components/EasterEgg/'</b>
 * </div><br />
 * Display a clickable element on the page.<br />
 * Must be used with the \<EasterEggReveal\> and/or \<EasterEggSummary\> components.
 */
export default {
    name: 'EasterEgg',
    props: {
        /**
         * Unique ID of the egg.
         */
        id: {
            type: String,
            required: true
        },

        /**
         * Picture of the easter egg.
         */
        src: {
            type: String,
            default: 'https://via.placeholder.com/50x50/ec008c/000000/?text=Egg'
        },

        /**
         * Placeholder of the easter egg (used by EasterEggSummary component).
         */
        placeholder: {
            type: String,
            default: 'https://via.placeholder.com/50x50/?text=Egg'
        },

        foundPlaceholder: {
            type: String
        }
    },
    data: () => ({
        isFound: false
    }),
    mounted() {
        this.addEgg({
            id: this.id,
            src: this.src,
            placeholder: this.placeholder,
            foundPlaceholder: this.foundPlaceholder,
            isFound: this.isFound
        })
    },
    methods: {
        ...mapActions([
            'addEgg',
            'foundEgg'
        ]),
        easterEggClickHandler() {
            if (!this.isFound) {
                this.isFound = true
                this.foundEgg(this.id)
            }
        }
    }
}
