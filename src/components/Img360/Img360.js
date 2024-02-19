'use strict'

import img360Counter from './Img360Counter'

/**
 * Display a list of images that can be browsed using click + move (or touch + move).
 */
export default {
    name: 'Img360',
    props: {
        /**
         * Array of images URLs.
         */
        src: {
            type: Array,
            required: true
        },

        /**
         * Threshold in px that will trigger the next image (horizontal movement).
         */
        xThreshold: {
            type: Number,
            default: 20
        }
    },
    data: () => ({
        index: null,
        currentImg: 0,
        isGrabbing: false,
        xBuffer: 0,
        startX: 0,
        moveX: 0,
        trackingSent: false
    }),
    mounted() {
        img360Counter++
        this.index = img360Counter
    },
    methods: {
        previousImage() {
            this.currentImg = this.currentImg === 0 ? (this.src.length - 1) : --this.currentImg
            this.resetBuffer()
        },
        nextImage() {
            this.currentImg = this.currentImg === (this.src.length - 1) ? 0 : ++this.currentImg
            this.resetBuffer()
        },
        handleBuffer() {
            if (this.xBuffer > this.xThreshold) {
                this.previousImage()
            } else if (this.xBuffer < -this.xThreshold) {
                this.nextImage()
            }
        },
        resetBuffer() {
            this.xBuffer = 0

            if (!this.trackingSent) {
                this.$tracking.click(`PAGE_360-${this.index}`)
                this.trackingSent = true
            }
        },

        // Mouse control
        mouseDownHandler(event) {
            event.preventDefault()
            this.isGrabbing = true
        },
        mouseMoveHandler(event) {
            if (this.isGrabbing) {
                this.xBuffer += event.movementX
                this.handleBuffer()
            }
        },
        mouseUpHandler() {
            this.isGrabbing = false
            this.resetBuffer()
        },

        // Touch control
        touchStartHandler(event) {
            this.startX = event.touches.item(0).clientX
            this.moveX = this.startX
            this.isGrabbing = true
        },
        touchMoveHandler(event) {
            if (this.isGrabbing) {
                this.moveX = parseInt(event.touches.item(0).clientX)
                this.xBuffer -= this.startX - this.moveX
                this.startX = this.moveX
                this.handleBuffer()
            }
        },
        touchEndHandler() {
            this.isGrabbing = false
        }
    }
}
