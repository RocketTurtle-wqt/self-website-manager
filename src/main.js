import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'
import SIdentify from './components/Identify'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios';
import VueCookies from 'vue-cookies'
import VueParticles from 'vue-particles'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import { Button, MenuItem, Menu, Dialog, Form, FormItem, Input, Select, Option, Collapse, CollapseItem, Divider } from 'element-ui';

Vue.use(VueCookies);
Vue.use(SIdentify);
Vue.use(mavonEditor);
Vue.use(VueToast);
//Vue.$toast.open({/* options */});
let instance = Vue.$toast.open('You did it!');
// Force dismiss specific toast
instance.dismiss();
// Dismiss all opened toast immediately
Vue.$toast.clear();
Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Divider);
Vue.use(VueParticles);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
