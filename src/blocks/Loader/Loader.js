'use strict'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('loader')

/**
 * Displays a loading screen before all images are succesfully loaded.<br />
 */
export default {
    name: 'Loader',
    props: {
        /**
         * Change the default spinner for something else.
         */
        type: {
            type: String,
            validator: (value) => {
                return ['progressBar', 'veepeeSpinner', 'bullets', 'consent'].indexOf(value) !== -1
            }
        },

        /**
         * Classic display of the Loader.
         */
        classic: {
            type: Boolean
        },

        /**
         * Applies a CSS transition when the loader closes.<br />
         * Available transitions are declared in the `src/assets/styles/transitions` folder<br />
         * <a href="https://vuejs.org/v2/guide/transitions.html" target="_blank">More info about vue.js transitions</a>
         */
        transition: {
            type: String,
            default: 'move-up'
        },

        /**
         * Add a blurred background.<br />
         * You have to set the background-image into the .loader__blurred-bg class
         */
        blur: {
            type: Boolean
        }
    },
    computed: {
        ...mapGetters([
            'progress',
            'isLoaded',
            'isConsent'
        ]),
        showLoader() {
            return (this.type !== 'consent') ? this.isLoaded : this.isConsent && this.isLoaded
        }
    }
}
