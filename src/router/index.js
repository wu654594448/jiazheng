import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout'),
    children: [
      { path: '/home', name: 'home', component: () => import('@/views/home') },
      { path: '/my', name: 'my', component: () => import('@/views/my') },
      { path: '/company', name: 'company', component: () => import('@/views/company') },
      { path: '/worker', name: 'worker', component: () => import('@/views/worker') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
