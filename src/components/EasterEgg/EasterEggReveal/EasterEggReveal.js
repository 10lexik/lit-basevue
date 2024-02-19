'use strict'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('easterEgg')

/**
 * <div style="background-color: #cce5ff; color: #004085; padding: 10px 15px; border-radius: 5px;">
 *     You can import Swiper and Slide in one line using below import<br />
 *     <b>import { EasterEgg, EasterEggReveal, EasterEggSummary } from '@/components/EasterEgg/'</b>
 * </div><br />
 * Wrap any HTML element to hide it under a cover until the corresponding \<EasterEgg\> elements are found.<br />
 * The cover's content can be customized.<br />
 * Must be used with the \<EasterEgg\> component.
 */
export default {
    name: 'EasterEggReveal',
    props: {
        /**
         * ID of the eggs to be found in order to reveal the content. Can be a string for a single egg or an array of strings for multiple eggs.
         */
        eggs: {
            type: [Array, String]
        }
    },
    data: () => ({
        selectedEggs: []
    }),
    computed: {
        ...mapState({
            allEggs: 'eggs'
        }),
        ...mapGetters([
            'eggsCount',
            'eggsFoundCount',
            'allEggsFound'
        ]),
        showContent() {
            // If no eggs are set as props, then all EasterEggs must be found to reveal the content
            if (!this.selectedEggs.length) {
                return this.allEggsFound
            }

            // Loop through each selected egg and reveal content if all eggs are found
            let showContent = true
            this.selectedEggs.forEach(e => {
                showContent = showContent && e.isFound
            })

            return showContent
        }
    },
    watch: {
        allEggs(eggs) {
            if (eggs.length && this.eggs) {
                this.setSelectedEggs()
            }
        }
    },
    methods: {
        setSelectedEggs() {
            let selectedEggs = []

            if (Array.isArray(this.eggs)) {
                selectedEggs = this.allEggs.filter((elem) => {
                    return this.eggs.find(id => elem.id === id)
                })
            } else {
                let egg = this.allEggs.find(({ id }) => id === this.eggs)
                selectedEggs.push(egg)
            }

            this.selectedEggs = selectedEggs
        }
    }
}
