import Loader from '@/blocks/Loader/Loader.vue'
import Header from '@/blocks/_modulus/blocks/Header/Header.vue'
import Footer from '@/blocks/Footer/Footer.vue'
import Sticky from '@/components/Sticky/Sticky.vue'
import Offer from '@/blocks/_modulus/blocks/Offer/Offer.vue'
// new blocks (do not remove this comment)

import { createNamespacedHelpers } from 'vuex'
import { playMasterTimeline } from '@/js/plugins/timelineManager'
const { mapGetters, mapActions } = createNamespacedHelpers('loader')

export default {
    name: 'app',
    components: {
        Loader,
        Header,
        Offer,
        Sticky,
        Footer
    },
    data() {
        return {
            animationIntro: null
        }
    },
    computed: {
        ...mapGetters([
            'nbAssets',
            'isLoaded',
            'isConsentLoaded'
        ])
    },
    watch: {
        isLoaded(loaded) {
            if (loaded) {
                this.stopLoadingTimer()
                this.monsterTl()
            }
        }
    },
    beforeMount() {
        this.startLoadingTimer()
    },
    methods: {
        ...mapActions([
            'setLoadingTime'
        ]),
        monsterTl() {
            this.$gsap.timeline()
                .add(this.isAnimationIntroSet)
                .add(playMasterTimeline)
        },
        startLoadingTimer() {
            this.$disableScroll()
            this.startTime = Date.now()
        },
        stopLoadingTimer() {
            this.endTime = Date.now()
            let loadingTime = this.endTime - this.startTime
            this.setLoadingTime(loadingTime)
            this.isConsentLoaded && this.$enableScroll()
            console.log(`Loading time: ${loadingTime}ms`)
        },
        isAnimationIntroSet() {
            if (this.$options.components.Header) {
                this.$nextTick(() => {
                    const header = this.$children.find(child => child.$options.name === 'Header')
                    if (header && header.animationIntro) {
                        this.$disableScroll()
                    }
                })
            }
        }
    }
}
