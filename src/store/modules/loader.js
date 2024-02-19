'use strict'

const state = () => ({
    imgCount: 0,
    imgLoaded: 0,
    videos: [],
    loaded: false,
    loadingTime: 0,
    apiLoadingTime: 0,
    isConsent: null
})

const getters = {
    imgProgress: state => (state.imgLoaded / state.imgCount) * 100,
    videoProgress: state => {
        let videoProgress = 0

        if (state.videos.length > 0) {
            let videoProgressSum = state.videos
                .map(v => v.progress)
                .reduce((sum, value) => sum + value)
            videoProgress = videoProgressSum / state.videos.length
        }

        return videoProgress
    },
    progress: (state, getters) => state.videos.length > 0 ? (getters.imgProgress + getters.videoProgress) / 2 : getters.imgProgress,
    isLoaded: (state, getters) => {
        if (!state.loaded && getters.progress >= 100) state.loaded = true
        return (getters.progress >= 100 || state.loaded)
    },
    isConsentLoaded: (state) => (state.isConsent == null || state.isConsent),
    loadingData: (state) => ({
        loadingTime: state.loadingTime,
        apiLoadingTime: state.apiLoadingTime,
        imgCount: state.imgCount,
        videosCount: state.videos.length
    }),
    nbAssets: (state) => {
        let res = `images: ${state.imgLoaded}/${state.imgCount}`
        for (let i = 0; i < state.videos.length; i++) {
            res += ` | ${state.videos[i].src} : ${state.videos[i].progress}%`
        }
        return res
    },
    isConsent: (state) => state.isConsent
}

const actions = {
    incrementImgCount: context => context.commit('incrementImgCount'),
    incrementImgLoaded: context => context.commit('incrementImgLoaded'),
    registerVideo: (context, payload) => context.commit('registerVideo', payload),
    progressVideo: (context, payload) => context.commit('progressVideo', payload),
    setLoadingTime: (context, payload) => context.commit('setLoadingTime', payload),
    setConsent: (context, payload) => context.commit('setConsent', payload)
}

const mutations = {
    incrementImgCount: state => state.imgCount++,
    incrementImgLoaded: state => state.imgLoaded++,
    registerVideo: (state, payload) => state.videos.push(payload),
    progressVideo: (state, payload) => {
        let videoIndex = state.videos.findIndex(item => item.src === payload.src)
        state.videos[videoIndex].progress = payload.progress
    },
    setLoadingTime: (state, payload) => {
        state.loadingTime = payload
    },
    setConsent: (state, payload) => (state.isConsent = payload)
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
