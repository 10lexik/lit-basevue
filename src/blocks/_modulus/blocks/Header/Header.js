'use strict'

import HeaderAnimation from '@/blocks/_modulus/blocks/Header/HeaderAnimation/HeaderAnimation.vue'
import Video from '@/components/Video/Video.vue'

const DEFAULT_CLIP_PATH_VALUES = [
    'inset(0 0 0 100%)',
    'inset(0 100% 0 0)',
    'inset(100% 0 0 0)',
    'inset(0 0 100% 0)',
    'inset(0 100% 0 100%)',
    'inset(100% 0 100% 0)'
]

export default {
    name: 'Header',
    components: {
        HeaderAnimation,
        Video
    },
    provide() {
        return {
            getHeaderRef: () => this.$refs.header
        }
    },
    props: {
        variant: {
            type: String,
            validator: function(value) {
                return ['top', 'bottom', 'pop-in', 'block'].indexOf(value) !== -1
            }
        },
        title: {
            type: [String, Object, Array]
        },
        text: {
            type: [String, Object, Array]
        },
        textScroll: {
            type: [String, Object, Array]
        },
        textAlign: {
            type: String,
            default: 'center',
            validator: function(value) {
                return ['center', 'left', 'right'].indexOf(value) !== -1
            }
        },
        logo: {
            type: String
        },
        customClass: {
            type: String,
            default: ''
        },
        img: {
            type: [Object, String]
        },
        video: {
            type: [Object, String]
        },
        /**
         * Intro animation settings<br />
         * Set here all animations props. Default animation if true
         */
        animationIntro: {
            type: [Object, Boolean],
            default: false
        },
        changeSlideInterval: {
            type: Number,
            default: 2500
        }
    },
    computed: {
        isMobile() {
            return this.$config.detectEnv.isMobile
        },
        selectedImageList() {
            return this.getSelectedMediaList('img')
        },
        selectedVideoList() {
            return this.getSelectedMediaList('video')
        },
        mediaType() {
            if (this.img) {
                return 'image'
            } else if (this.video) {
                return 'video'
            }
            return null
        }
    },
    data() {
        return {
            currentIndex: 0,
            localAnimationIntro: this.animationIntro
        }
    },
    methods: {
        playVideo(index) {
            const videoElement = this.$el.querySelectorAll('.header__animation__bg video')[index]
            if (videoElement) {
                videoElement.play()
            }
        },
        stopVideo(index) {
            const videoElement = this.$el.querySelectorAll('.header__animation__bg video')[index]
            if (videoElement) {
                videoElement.pause()
                videoElement.currentTime = 0
            }
        },
        setupSlider() {
            this.$gsap.set(this.$el.querySelector('.header__animation__bg'), { clipPath: 'inset(0 0 0 0)' })
            this.$gsap.to(this.$el, {
                duration: 1,
                ease: 'none',
                onComplete: () => this.autoPaySlider()
            })
        },
        autoPaySlider() {
            setInterval(() => {
                this.changeSlide(this.currentIndex + 1)
            }, this.changeSlideInterval)
        },
        randomClipPathValue() {
            const randomIndex = Math.floor(Math.random() * DEFAULT_CLIP_PATH_VALUES.length)
            return DEFAULT_CLIP_PATH_VALUES[randomIndex]
        },
        changeSlide(index) {
            const initDirection = this.animationIntro && this.animationIntro.hasOwnProperty('direction') ? this.animationIntro.direction : 'default'
            if (index >= this.getSelectedMedia().length) {
                index = 0
            }
            this.$gsap.timeline()
                .to(this.$el.querySelector('.active'), {
                    ease: 'power1.inOut',
                    duration: 1,
                    clipPath: this.getClipPathValue(initDirection),
                    onStart: () => this.video ? this.stopVideo(index) : null,
                    onUpdate: () => this.video ? this.playVideo(index) : null,
                    onComplete: () => {
                        this.currentIndex = index
                    }
                }, 0)
                .to(this.$el.querySelector('.active'), {
                    clipPath: 'inset(0 0 0 0)'
                })
        },
        getImageStyle(index) {
            const zIndex = index === this.currentIndex ? 2 : (index === this.currentIndex + 1 || (index === 0 && this.currentIndex === this.getSelectedMedia().length - 1)) ? 1 : 0
            return { zIndex }
        },
        getSelectedMediaList(mediaType) {
            if (this[mediaType] && typeof this[mediaType] !== 'string') {
                const bgMedia = this.isMobile ? (this[mediaType].mob || this[mediaType].desk) : (this[mediaType].desk || this[mediaType].mob)
                return Array.isArray(bgMedia) ? bgMedia : [bgMedia]
            } else if (this[mediaType]) {
                return [this[mediaType]]
            }
            return null
        },
        getClipPathValue(initDirection) {
            const clipPathMapper = {
                default: DEFAULT_CLIP_PATH_VALUES[0],
                left: DEFAULT_CLIP_PATH_VALUES[0],
                right: DEFAULT_CLIP_PATH_VALUES[1],
                up: DEFAULT_CLIP_PATH_VALUES[2],
                down: DEFAULT_CLIP_PATH_VALUES[3],
                sandwichX: DEFAULT_CLIP_PATH_VALUES[4],
                sandwichY: DEFAULT_CLIP_PATH_VALUES[5],
                random: this.randomClipPathValue()
            }
            return clipPathMapper[initDirection] || 'inset(0 0 0 0)'
        },
        getSelectedMedia() {
            return this.mediaType === 'image' ? this.selectedImageList : this.selectedVideoList
        },
        initHeader() {
            if (this.getSelectedMedia() && this.getSelectedMedia().length > 1) {
                this.setupSlider()
            }
        }
    },
    mounted() {
        this.$EventBus.$emit('add-animation', this.initHeader, 0, 'header')
    }
}
