import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Dashboard from '../views/dashboard/index.vue'
import UserProfile from '../views/dashboard/profile.vue'
import DashboardHome from '../views/dashboard/home.vue'
import UserProjects from '../views/dashboard/projects/index.vue'
import UserProjectsOne from '../views/dashboard/projects/single.vue'
import UserDatabase from '../views/dashboard/database.vue'
import UserSettings from '../views/dashboard/settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'login' },

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'dashboard.index',
    component: Dashboard,
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
        name:"dashboard.projects.one",
        path: '/projects/:id',
        component: UserProjectsOne
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
