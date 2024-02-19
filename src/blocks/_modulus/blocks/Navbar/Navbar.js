'use strict'

export default {
    name: 'Navbar',
    props: {
        activeIndex: {
            type: Number
        },
        content: {
            type: Array
        }
    },
    data() {
        return {
            indexBtn: 0
        }
    },
    watch: {
        activeIndex(value) {
            this.indexBtn = value
        }
    },
    methods: {
        selector(index) {
            this.indexBtn = index
            this.$emit('getActiveIndex', this.indexBtn)
        }
    }
}
