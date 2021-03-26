import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Write from '../views/Write.vue'
import Artical from '../views/Artical.vue'
import Echarts from '../views/Echarts.vue';
import Vlog from '../views/Vlog.vue';
import Err from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Login
  },
  {
    path: '/404',
    component:Err
  },
  {
    path: '/write',
    component: Write,
  },
  {
    path: '/write/:id',
    component: Write
  },
  {
    path: '/artical',
    component:Artical
  },
  {
    path: '/traffic',
    component:Echarts
  },
  {
    path: '/vlog',
    component:Vlog
  },
  {
    path: '*',
    redirect: '/404',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
