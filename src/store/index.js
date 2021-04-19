import Vue from 'vue'
import Vuex from 'vuex'
import {
  QUIT_CLASSIFY_DIALOG,
  ADD_CLASSIFY,
  DELETE_ARTICAL,
  SET_CLASSIFY
} from '../config/mutation-types.js';

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
    [QUIT_CLASSIFY_DIALOG](state) {
      state.createClassifyDialog = false;
    },
    [ADD_CLASSIFY](state, payload) {
      state.classify.push(payload.newClassify);
    },
    [DELETE_ARTICAL](state, payload) {
      state.selectClassify = state.selectClassify.filter(artical => {
        return artical.id !== payload.id;
      });
    },
    [SET_CLASSIFY](state, payload) {
      state.selectClassify = payload.classifies;
    }
  },
  actions: {
  },
  modules: {
  }
})
