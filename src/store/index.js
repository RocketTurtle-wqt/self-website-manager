import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    classify: [],
    selectClassify: [],
    createClassifyDialog: false,
    issueLoding: false,
    currentClassifyId: 0,
    articalNumber:0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
