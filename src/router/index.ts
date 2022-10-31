import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import appLayout from '@/views/AppView.vue'

const routes: Array<RouteRecordRaw> = [
  // App Layout
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: appLayout,
    children: [
      {
        path: '',
        name: 'Home',
        meta: { login: true },
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
