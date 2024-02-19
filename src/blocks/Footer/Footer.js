'use strict'

export default {
    name: 'Footer',
    computed: {
        year() {
            const beginDate = this.$store.state.dumbo.config.beginDate
            const date = beginDate ? new Date(beginDate) : new Date()
            return date.getFullYear()
        }
    }
}
