'use strict'
import Footer from '@/blocks/Footer/Footer.vue'
import Sticky from '@/components/Sticky/Sticky.vue'

export default {
    name: 'Immersive',
    components: {
        Footer,
        Sticky
    },
    props: {
        /**
         * Set your content.
         */
        content: {
            type: Array,
            require: true
        },
        /**
         * Remove the Sticky.
         */
        hideSticky: {
            type: Boolean
        }
    },
    data: () => ({
        activeIndex: 0,
        activeType: null,
        activeContentPosition: null,
        popins: null
    }),
    watch: {
        activeIndex: function(index) {
            let stroke = 116
            let ratio = (index / (this.content.length - 1))
            let result = stroke * ratio
            document.querySelector('.st0').style.strokeDashoffset = stroke - result
        }
    },
    computed: {
        options: function() {
            return {
                licenseKey: 'BCAA0C26-998D4D16-B446505D-36F4E645',
                onLeave: this.onLeave
            }
        }
    },
    methods: {
        scrollTo: function(value) {
            if (value) {
                this.$refs.fullpage.api.moveSectionDown()
            }
        },
        onLeave: function(origin, destination) {
            this.activeIndex = destination.index
            this.activeType = this.content[destination.index].type
            this.activeContentPosition = this.content[destination.index].contentPosition
        },
        activePopin: function(value) {
            this.$set(this.popins, value, true)
        },
        closePopin: function(value) {
            this.$set(this.popins, value, false)
        }
    },
    beforeMount() {
        this.popins = Object.assign({}, this.content.map((value) => { return false }))
    },
    mounted() {

    }
}
