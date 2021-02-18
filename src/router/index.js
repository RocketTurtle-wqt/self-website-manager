import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Write from '../views/Write.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Login
  },
  {
    path: '/write',
    component:Write
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
