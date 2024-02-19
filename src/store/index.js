import Vue from 'vue'
import Vuex from 'vuex'
import loader from './modules/loader'
import easterEgg from './modules/easterEgg'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        loader,
        easterEgg
    }
})

export default store
