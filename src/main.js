import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'
import SIdentify from './components/Identify'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios';
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

Vue.prototype.$axios = axios;

Vue.use(SIdentify)

Vue.use(mavonEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
