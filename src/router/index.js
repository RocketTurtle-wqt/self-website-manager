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
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/write/:id',
    component: Write,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/artical',
    component: Artical,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/traffic',
    component: Echarts,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/vlog',
    component: Vlog,
    meta: {
      requireAuth: true
    }
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
});

//路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    console.log('进入');
    if (window.sessionStorage.getItem('loginStatus')) {
      next();
    } else {
      next({ path: '/' });
    }
  } else {
    next();
  }
});

export default router
