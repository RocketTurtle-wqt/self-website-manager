import Vue from 'vue'
import Vuex from 'vuex'
import {
  QUIT_CLASSIFY_DIALOG,
  OPEN_CLASSIFY_DIALOG,
  ADD_CLASSIFY,
  DELETE_ARTICAL,
  SET_CLASSIFY,
  SET_CURRENT_CLASSIFY_ID,
  SET_ARTICAL_NUMBER,
  SET_SELECT_CLASSIFY,
  DELETE_CLASSIFY,
  SET_LOGINSTATUS
} from '../config/mutation-types.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: window.sessionStorage.getItem('loginStatus'),
    classify: [],
    selectClassify: [],
    createClassifyDialog: false,
    issueLoding: false,
    currentClassifyId: 0,
    articalNumber: 0,
  },
  mutations: {
    [QUIT_CLASSIFY_DIALOG](state) {
      state.createClassifyDialog = false;
    },
    [OPEN_CLASSIFY_DIALOG](state) {
      state.createClassifyDialog = true;
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
      state.classify = payload.classifies;
    },
    [SET_CURRENT_CLASSIFY_ID](state, payload) {
      state.currentClassifyId = payload.id;
    },
    [SET_ARTICAL_NUMBER](state, payload) {
      state.articalNumber = payload.num;
    },
    [SET_SELECT_CLASSIFY](state, payload) {
      state.selectClassify = payload.essays;
    },
    [DELETE_CLASSIFY](state, payload) {
      console.log('id---', payload.id);
      state.classify = state.classify.filter(classify => {
        return classify.id !== payload.id;
      });
    },
    [SET_LOGINSTATUS](state) {
      state.loginStatus = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
