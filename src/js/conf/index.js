'use strict'
import common from './common'
import detectEnv from './detectEnv'
import Vue from 'vue'

let config = {
    common: common,
    detectEnv: detectEnv
}

Vue.prototype.$config = config

export default config
