import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'

// App
import App from '@/App.vue'

// Global components
import Loader from '@/blocks/Loader/Loader.vue'
import Img from '@/components/Img/Img.vue'
import Click from '@/components/Click/Click.vue'
import Fonts from '@/components/_mods/Fonts/Fonts.vue'

// Plugins
import '@/js/plugins/scrollManager'
import VueScrollTo from 'vue-scrollto'
import vhcheck from '@/js/plugins/vhcheck'
import { InlineSvgPlugin } from 'vue-inline-svg'
import { EventBus } from '@/js/plugins/event-bus'

// Conf
import '@/js/conf/'

// Directives
import { loader, timer, timestamp, display } from '@/js/directives'

// Store
import store from '@/store/'

// GSAP
import gsap from 'gsap'

// FULLPAGE
import VueFullPage from 'vue-fullpage.js'

// APPEAR ANIMATION
import ScrollAnimationMixin from '@/js/mixins/scrollAnimations/apparitions/apparitions.js'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({
    // Do not remove. On mobile devices, prevent 'jump' from bar address resize on scroll animations. You are welcome :)
    // default is "resize,visibilitychange,DOMContentLoaded,load" so you can remove "resize" from the list:
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
})

Vue.config.productionTip = false
Vue.use(VueYouTubeEmbed, { global: true, componentId: 'youtube-media' })
Vue.use(VueFullPage)
Vue.use(VueScrollTo)
Vue.use(InlineSvgPlugin)

// Components
Vue.component('Loader', Loader)
Vue.component('Img', Img)
Vue.component('Click', Click)
Vue.component('Fonts', Fonts)

// Directives
Vue.directive('loader', loader)
Vue.directive('timer', timer)
Vue.directive('timestamp', timestamp)
Vue.directive('display', display)

// Mixins
Vue.mixin(ScrollAnimationMixin)

cssVars({
    rootElement: document // default
})

// Force to start at top of the page
window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}

new Vue({
    store,
    render: h => h(App),
    beforeMount() {
        // Used to create a global var (exemple of use : this.$config or {{ $config }} in a template)
        Vue.prototype.$gsap = gsap
        Vue.prototype.$ScrollTrigger = ScrollTrigger
        Vue.prototype.$EventBus = EventBus
        vhcheck()
    }
}).$mount('#app')
