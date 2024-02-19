'use strict'
import Video from '@/components/Video/Video.vue'

export default {
    name: 'Accordion',
    props: {
        /**
         * Define the type of the overlay in .<br />
         * Available values :
         * <ul>
         *   <li>`full` <i>(default value)</i></li>
         *   <li>`horizontal`</li>
         *   <li>`vertical`</li>
         * </ul>
        */
        overlay: {
            type: [String],
            default: 'full',
            validator: (value) => {
                return ['honzital', 'vertical', 'full']
            }
        },
        /**
        * Set your content.
        */
        content: {
            type: [Array, Object]
        }
    },
    components: {
        Video
    },
    data() {
        return {
            indexPan: 0,
            url: null
        }
    },
    methods: {
        panelExtends(index) {
            this.indexPan = index
        },
        addBackground() {
            const pannels = this.content.pannels

            pannels.forEach((element, index) => {
                if (element.video) return

                const pannel = this.$refs.accordion.querySelector(`.accordion__slider__panel__img-${index}`)
                this.url = !this.$config.detectEnv.isDesktop ? element.backgroundMob : element.backgroundDesk

                if (this.url.indexOf('http') !== -1) {
                    pannel.style.backgroundImage = `url(${this.url})`
                } else {
                    let localUrl = require(`@/assets/img/${this.url}`)
                    pannel.style.backgroundImage = `url(${localUrl})`
                }
            })
        }
    },
    mounted() {
        this.addBackground()
    }
}
