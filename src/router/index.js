import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

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
    path: '/register',
    name: 'register',
    component: Register
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
        component: () => import('../views/dashboard/home/home.vue'),
      },
      {
        name: "dashboard.profile",
        path: '/profile',
        component: () => import('../views/dashboard/home/profile.vue'),
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
        name: "dashboard.projects.endpoint.new",
        path: '/projects/:id/new',
        component: () => import('../views/dashboard/endpoints/new.vue'),
      },
      {
        name: "dashboard.projects.settings",
        path: '/projects/:id/settings',
        component: () => import('../views/dashboard/projects/settings.vue'),
      },
      {
        name: "dashboard.projects.view",
        path: '/projects/:id/:eid',
        component: () => import('../views/dashboard/endpoints/index.vue'),
      },
      {
        name: "dashboard.projects.endpoint.database",
        path: '/projects/:id/:eid/db',
        component: () => import('../views/dashboard/endpoints/database.vue'),
      },
      {
        name: "dashboard.settings",
        path: '/settings',
        component: () => import('../views/dashboard/home/settings.vue'),
      }
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
