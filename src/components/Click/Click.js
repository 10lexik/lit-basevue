'use strict'

import { createNamespacedHelpers } from 'vuex'
const { mapState: mapStateLoader } = createNamespacedHelpers('loader')

/**
 * Displays a link, a button, or a block element that fires a tracking event on click.<br />
 * Click is globally loaded, so you don't need to import it when you create a new block.<br />
 */
export default {
    name: 'Click',
    props: {
        id: {
            type: String
        },
        /**
         * Define the button size.<br />
         * Available values :
         * <ul>
         *   <li>`xs`</li>
         *   <li>`s` <i>(default value)</i></li>
         *   <li>`m`</li>
         * </ul>
        */
        size: {
            type: String,
            default: 's',
            validator: (value) => {
                return ['xs', 's', 'm'].indexOf(value) !== -1
            }
        },
        /**
         * Define the style of the button.<br />
         * The `submit` variant is not tracked by default.<br />
         * Available values :
         * <ul>
         *   <li>`primary` <i>(default value)</i></li>
         *   <li>`secondary`</li>
         *   <li>`link`</li>
         *   <li>`submit`</li>
         * </ul>
        */
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return ['primary', 'secondary', 'link', 'submit'].indexOf(value) !== -1
            }
        },
        /**
         * Display the link as a Button component.<br />
         * Has no effect if a slot is specified or if `submit` variant is specified.
         */
        button: {
            type: Boolean
        },
        /**
         * Center the button with margin auto.
         */
        center: {
            type: Boolean
        },

        /**
         * Add classes easy to update.
         */
        buttonClass: {
            type: String
        },
        /**
         * Disabled button isn't tracked by default.
         */
        disabled: {
            type: Boolean
        },
        icon: {
            type: String
        },
        /**
         * Switch the icon with the label
         */
        reverse: {
            type: Boolean
        },
        /**
         * Set the button width to 100%.
         */
        block: {
            type: Boolean
        },
        label: {
            type: [String, Number]
        },
        type: {
            type: String,
            default: 'click',
            validator: (value) => {
                return ['click', 'tab', 'live', 'storeLocator', 'brandAlert'].indexOf(value) !== -1
            }
        },
        href: {
            type: String
        }
    },
    computed: {
        ...mapStateLoader([
            'contentInitialized'
        ]),
        buttonPosition() {
            return (this.center) ? 'click-center' : ''
        },
        dataButtonLabel() {
            // label prop has priority
            if (this.label) return this.label
            return 'label'
        },
        dataTrackingLabel() {
            // trackingLabel prop has priority
            if (this.trackingLabel) return this.trackingLabel

            // No label = error
            else {
                console.error('Error: missing tracking label', this.$el)
                return ''
            }
        },
        dataHref() {
            // label prop has priority
            if (this.href) return this.href
        },
        dataTarget() {
            return '_self'
        }
    }
}
