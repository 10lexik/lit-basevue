'use strict'

/**
 * <div style="background-color: #cce5ff; color: #004085; padding: 10px 15px; border-radius: 5px;">
 *   This component <b>must</b> be used inside the <a href="#storyviewer">StoryViewer</a> component and bound to the <b>popins</b> named slot.<br />
 *   <b>Only works when a story is set.</b>
 * </div><br />
 * Displays a popin inside the model's wrapper depending on story progress.
 */
export default {
    name: 'StoryViewerPopin',
    props: {
        start: {
            type: [String, Number],
            required: true
        },
        end: {
            type: [String, Number],
            required: true
        },
        position: {
            type: String,
            default: 'bottom'
        }
    },
    data: () => ({
        isActive: false
    }),
    methods: {
        updatePercentHandler(percent) {
            this.isActive = percent > this.start && percent < this.end
        }
    },
    created() {
        this.$parent.$on('updatePercent', this.updatePercentHandler)
    }
}
