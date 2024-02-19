'use strict'

const state = () => ({
    eggs: []
})

const getters = {
    eggsCount: state => state.eggs.length,
    eggsFoundCount: state => state.eggs.filter(e => e.isFound === true).length,
    allEggsFound: (state, getters) => getters.eggsFoundCount === getters.eggsCount,
    progress: (state, getters) => (getters.eggsFoundCount / getters.eggsCount) * 100
}

const actions = {
    addEgg: (context, newEgg) => context.commit('addEgg', newEgg),
    foundEgg: (context, eggId) => context.commit('foundEgg', eggId)
}

const mutations = {
    addEgg: (state, newEgg) => {
        if (!state.eggs.find(e => e.id === newEgg.id)) {
            state.eggs.push(newEgg)
        } else {
            throw new Error(`Multiple <EasterEgg /> components with the same id: ${newEgg.id}`)
        }
    },
    foundEgg: (state, eggId) => {
        state.eggs.map(e => {
            if (e.id === eggId) {
                e.isFound = true
            }
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
