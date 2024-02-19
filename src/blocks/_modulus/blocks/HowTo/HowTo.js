'use strict'
import Stacking from '@/blocks/Stacking/Stacking.vue'
import Swiper from '@/blocks/Swiper/Swiper.vue'
import Slide from '@/blocks/Swiper/Slide/Slide.vue'
import htCounter from './htCounter'

export default {
    name: 'HowTo',
    data: () => ({
        indexHowto: 0,
        idSlider: 0,
        contentSwiper: false
    }),
    mounted() {
        htCounter++
        this.indexHowto = htCounter

        if (this.variant === 'slider') {
            this.contentSwiper = this.$refs.howto.querySelector('.howto__swiper').swiper
            let myThis = this
            this.contentSwiper.on('slideChangeTransitionEnd', function() {
                console.log(this.el.querySelector('.swiper-slide-active').dataset.slide)
                myThis.idSlider = Number(this.el.querySelector('.swiper-slide-active').dataset.slide)
            })
        }
    },
    props: {
        name: {
            type: String
        },
        title: {
            type: [ String, Object, Array ]
        },
        variant: {
            type: String,
            default: 'pile',
            validator: function(value) {
                return ['pile', 'slider'].indexOf(value) !== -1
            }
        },
        content: {
            type: Array
        },
        size: {
            type: String,
            default: 'small',
            validator: function(value) {
                return ['small', 'big'].indexOf(value) !== -1
            }
        }
    },
    computed: {
        spacingStacking() {
            let value
            if (this.size === 'small') {
                value = 15
            } else if (this.size === 'big') {
                value = 45
            }
            return value
        }
    },
    components: {
        Stacking,
        Swiper,
        Slide
    }
}
