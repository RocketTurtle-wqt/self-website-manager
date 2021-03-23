import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    classify: [],
    selectClassify: [],
    showClassify: false,
    issueLoding: false,
    currentClassify: 0,
    articalNumber:0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
