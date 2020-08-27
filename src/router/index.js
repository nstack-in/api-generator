import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      secondary: false,
      auth: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      secondary: false,
      auth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      secondary: false,
      auth: false,
    },
  },
  {
    path: "/home",
    name: "dashboard.home",
    component: () => import("../views/dashboard/home/index.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    path: "/projects",
    name: "dashboard.home",
    component: () => import("../views/dashboard/home/index.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.profile",
    path: "/profile",
    component: () => import("../views/dashboard/home/profile.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.projects.new",
    path: "/projects/new",
    component: () => import("../views/dashboard/projects/new.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.projects.one",
    path: "/projects/:id",
    component: () => import("../views/dashboard/projects/single.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.projects.endpoint.new",
    path: "/projects/:id/new",
    component: () => import("../views/dashboard/endpoints/new.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.projects.settings",
    path: "/projects/:id/settings",
    component: () => import("../views/dashboard/projects/settings.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.projects.edit",
    path: "/projects/:id/edit",
    component: () => import("../views/dashboard/projects/edit.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.projects.view",
    path: "/projects/:id/:eid",
    component: () => import("../views/dashboard/endpoints/index.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.projects.endpoint.database",
    path: "/projects/:id/:eid/db",
    component: () => import("../views/dashboard/endpoints/database.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.settings",
    path: "/settings",
    component: () => import("../views/dashboard/home/settings.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.dns",
    path: "/dns",
    component: () => import("../views/dashboard/dns/home.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
  {
    name: "dashboard.upgrade",
    path: "/upgrade",
    component: () => import("../views/dashboard/dns/home.vue"),
    meta: {
      secondary: true,
      auth: true,
    },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
