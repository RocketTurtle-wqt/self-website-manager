import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'
import SIdentify from './components/Identify'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios';
import VueCookies from 'vue-cookies'
import { Button, MenuItem, Menu, Dialog, Form, FormItem, Input, Select, Option } from 'element-ui';

Vue.use(VueCookies);
Vue.prototype.$axios = axios;
Vue.use(SIdentify);
Vue.use(mavonEditor);
Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
