import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import DashboardHome from '../views/dashboard/home.vue'

import UserProfile from '../views/dashboard/profile.vue'
import UserProjects from '../views/dashboard/projects/index.vue'
import UserProjectsOne from '../views/dashboard/projects/single.vue'
import UserProjectsNew from '../views/dashboard/projects/new.vue'
import UserProjectsSettings from '../views/dashboard/projects/settings.vue'

import CreateEndpoint from '../views/dashboard/projects/endpoints/create.vue'

import UserDatabase from '../views/dashboard/database.vue'
import UserSettings from '../views/dashboard/settings.vue'

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
        name:"dashboard.home",
        path: '/dashboard',
        component: DashboardHome
      } ,
      {
        name:"dashboard.profile",
        path: '/profile',
        component: UserProfile
      } ,
      {
        name:"dashboard.projects",
        path: '/projects',
        component: UserProjects
      } ,
      {
        name:"dashboard.projects.new",
        path: '/projects/new',
        component: UserProjectsNew
      } ,
      {
        name:"dashboard.projects.one",
        path: '/projects/:id',
        component: UserProjectsOne
      } ,
      {
        name:"dashboard.projects.new",
        path: '/projects/:id/new',
        component: CreateEndpoint
      } ,
      {
        name:"dashboard.projects.settings",
        path: '/projects/:id/settings',
        component: UserProjectsSettings
      } ,
      {
        name:"dashboard.database",
        path: '/database',
        component: UserDatabase
      } ,
      {
        name:"dashboard.settings",
        path: '/settings',
        component: UserSettings
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
