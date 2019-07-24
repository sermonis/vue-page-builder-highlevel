import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import ElementMod from './ElementMod'
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    ElementMod
  },
  strict: false,
})
