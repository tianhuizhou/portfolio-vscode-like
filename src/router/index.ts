import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import appLayout from '@/views/AppView.vue'

const routes: Array<RouteRecordRaw> = [
  // App Layout
  {
    path: '/',
    component: appLayout,
    children: [
      {
        path: '',
        name: 'Home',
        meta: {},
        component: () => import(/* webpackChunkName: "about" */ '@/views/about/IndexView.vue'),
      },
    ],
  },

  {
    path: '/works',
    component: appLayout,
    children: [
      {
        path: '',
        name: 'Work Experience',
        meta: {},
        component: () => import(/* webpackChunkName: "about" */ '@/views/about/WorkExperience.vue'),
      },
    ],
  },

  {
    path: '/skills',
    component: appLayout,
    children: [
      {
        path: '',
        name: 'Technical Skills',
        meta: {},
        component: () => import(/* webpackChunkName: "about" */ '@/views/about/SkillsView.vue'),
      },
    ],
  },

  {
    path: '/education',
    component: appLayout,
    children: [
      {
        path: '',
        name: 'Education',
        meta: {},
        component: () => import(/* webpackChunkName: "about" */ '@/views/about/EducationView.vue'),
      },
    ],
  },

  {
    path: '/projects',
    component: appLayout,
    children: [
      {
        path: '',
        name: 'Projects',
        meta: {},
        component: () => import(/* webpackChunkName: "about" */ '@/views/about/ProjectsView.vue'),
      },
      {
        path: ':id',
        name: 'Project Details',
        meta: {},
        component: () => import(/* webpackChunkName: "project" */ '@/views/project/ProjectDetails.vue'),
      },
    ],
  },

  {
    path: '/resume',
    component: appLayout,
    children: [
      {
        path: '',
        name: 'Resume',
        meta: {},
        component: () => import(/* webpackChunkName: "about" */ '@/views/about/ResumeView.vue'),
      },
    ],
  },

  /* 404 Page not found */
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
  {
    path: '/404',
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "common" */ '@/views/external/PageNotFound.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
