import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/programData',
    name: 'programData',
    component: () => import('../views/programData.vue')
  },
  {
    path: '/workManagement',
    name: 'workManagement',
    component: () => import('../views/workManagement.vue')
  },
  {
    path: '/UploadWorks',
    name: 'UploadWorks',
    component: () => import('../views/UploadWorks.vue')
  }
  ,
  {
    path: '/modelSet',
    name: 'modelSet',
    component: () => import('../views/modelSet.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 全局前置守卫
// router.beforeEach((to, from, next) => {
//   let token =  sessionStorage.getItem("token")
//   if (to.name !== 'login' && !token) {
//     next({ name: 'login' }); // 重定向到登录页
//   } else {
//     next(); // 继续正常的路由
//   }
// });


export default router
