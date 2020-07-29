import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'dashboard.index',
    component: () => import('../views/dashboard/index.vue'),
    redirect: { name: 'dashboard.home' },
    children: [
      {
        name: "dashboard.home",
        path: '/dashboard',
        component: () => import('../views/dashboard/home.vue'),
      },
      {
        name: "dashboard.profile",
        path: '/profile',
        component: () => import('../views/dashboard/profile.vue'),
      },
      {
        name: "dashboard.projects",
        path: '/projects',
        component: () => import('../views/dashboard/projects/index.vue'),
      },
      {
        name: "dashboard.projects.new",
        path: '/projects/new',
        component: () => import('../views/dashboard/projects/new.vue'),
      },
      {
        name: "dashboard.projects.one",
        path: '/projects/:id',
        component: () => import('../views/dashboard/projects/single.vue'),
      },
      {
        name: "dashboard.projects.new",
        path: '/projects/:id/new',
        component: () => import('../views/dashboard/projects/endpoints/create.vue'),
      },
      {
        name: "dashboard.projects.view",
        path: '/projects/:id/:eid',
        component: () => import('../views/dashboard/projects/endpoints/index.vue'),
      },
      {
        name: "dashboard.projects.settings",
        path: '/projects/:id/settings',
        component: () => import('../views/dashboard/projects/settings.vue'),
      },
      {
        name: "dashboard.database",
        path: '/database',
        component: () => import('../views/dashboard/database/index.vue'),
      },
      {
        name: "dashboard.settings",
        path: '/settings',
        component: () => import('../views/dashboard/settings.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
