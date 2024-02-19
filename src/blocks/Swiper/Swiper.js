'use strict'

import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.min.css'

/**
 * <div style="background-color: #cce5ff; color: #004085; padding: 10px 15px; border-radius: 5px;">
 *     You can import Swiper and Slide in one line using below import<br />
 *     <b>import { Swiper, Slide } from '@/blocks/Swiper/'</b>
 * </div><br />
 * Displays a slider using the <a href="https://swiperjs.com/" target="_blank">Swiper.js</a> library.<br />
 * Must be used alongside with the Slide component.
 */
export default {
    name: 'Swiper',
    props: {
        /**
         * Unique identifier.<br />
         * Only set this if you have multiple instances of Swiper in the same page.
         */
        name: {
            type: String,
            default: 'swiper--1'
        },

        /**
         * Swiper events and properties.<br />
         * List of events and properties can be found in the <a href="https://swiperjs.com/api/" target="_blank">Swiper API</a>.
         */
        swiperParams: {
            type: Object
        },

        /**
         * Set the pagination under slides.
         */
        paginationUnderSlides: {
            type: Boolean
        }

    },
    data: () => ({
        slider: null,
        params: {
            loop: true,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
            }
        }
    }),
    beforeMount() {
        this.params = this.swiperParams ? this.swiperParams : this.params
    },
    mounted() {
        this.slider = new Swiper(`.${this.name}`, this.params)
    }
}
