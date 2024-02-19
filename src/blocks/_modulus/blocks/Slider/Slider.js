'use strict'
import { Swiper, Slide } from '@/blocks/Swiper'
import Cards from '../Cards/Cards.vue'
import Navbar from '../Navbar/Navbar.vue'

export default {
    name: 'Slider',
    components: {
        Swiper,
        Slide,
        Navbar,
        Cards
    },
    props: {
        /**
         * The name of the Slider. Should be unique.
         */
        name: {
            type: String
        },
        /**
         * The title before the Slider.
         */
        title: {
            type: [ String, Object, Array ]
        },
        /**
         * Some variants of the Slider.<br />
         * Available values :
         * <ul>
         *     <li>`infoCard` <i>(default value)</i></li>
         *     <li>`simpleCard`</li>
         *     <li>`edito`</li>
         *     <li>`img`</li>
         *     <li>`reaCard`</li>
         * </ul>
         */
        variant: {
            type: String,
            default: 'infoCard',
            validator: function(value) {
                return ['infoCard', 'simpleCard', 'edito', 'img', 'reaCard'].indexOf(value) !== -1
            }
        },
        /**
         * List of buttons used in the Navbar.<br />
         * List of json objects with `id` prop and `targetId` required.<br />
         * `id` is the Dumbo id button, `targetId` is the id of the slide targeted.
         */
        navbar: {
            type: Array
        },
        /**
         * List of Cards objects to display
         */
        content: {
            type: Array
        },
        /**
         * Set unactive slides to low opacity, to focus on the active one.
         */
        focus: {
            type: Boolean
        },
        /**
         * Add shadows to the Cards used in the Slider.
         */
        popInCard: {
            type: Boolean
        },
        /**
         * Makes the Slider loop. The Slider `should NOT contain buttons if loop is used`.
         */
        loop: {
            type: Boolean
        },
        /**
         * Remove the animation that up/down the slides.
         */
        noAnimation: {
            type: Boolean
        },
        /**
         * The pagination will be under the Slider, not over at bottom.
         */
        paginationUnder: {
            type: Boolean
        },
        /**
         * The index of the initial slide.
         */
        initialSlide: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            idSlider: 0,
            idActiveNavbar: 0,
            contentSwiper: false
        }
    },
    computed: {
        variantCard() {
            return (this.variant === 'reaCard') ? 'reinsurance' : 'info'
        }
    },
    methods: {
        getNavbarIndex(index) {
            if (this.navbar) {
                // Verif idNavbar && targetId
                if (this.navbar[index].targetId <= this.content.length) {
                    this.contentSwiper.slideToLoop(this.navbar[index].targetId)
                }
            }
        },
        activeIdNavbar(id) {
            if (this.navbar) {
                // Verif sliderId && targetID
                let equalId = this.navbar.filter(tab => tab.targetId === id)
                if (equalId.length > 0) {
                    this.idActiveNavbar = this.navbar.indexOf(equalId[0])
                }
            }
        },
        initSlider() {
            this.$gsap.set(this.$el.querySelector('.swiper'), { paddingTop: this.$gsap.getProperty(this.$el.querySelector('.customTitle'), 'height') * (this.$config.detectEnv.isMobile ? 1.25 : 1.5) })
            this.contentSwiper = this.$refs.slider.querySelector('.slider__swiper').swiper
            let myThis = this
            this.contentSwiper.on('slideChangeTransitionEnd', function() {
                myThis.idSlider = Number(this.el.querySelector('.swiper-slide-active').dataset.slide)
                myThis.activeIdNavbar(myThis.idSlider)
            })
            // Init Navbar
            if (this.navbar) this.activeIdNavbar(0)
        }
    },
    mounted() {
        this.$EventBus.$emit('add-animation', this.initSlider, 'headerAnimation+=1', 'slider')
    }
}
