'use strict'

const state = () => ({
    hasAnimationIntro: false
})

const mutations = {
    setAnimationIntro(state, value) {
        state.hasAnimationIntro = value
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
