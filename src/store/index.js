import Vue from "vue";
import Vuex from "vuex";
import { projectMutation, authMutation, endpointMutation } from "./mutations";
import { projectAction, authAction, endpointAction } from "./actions";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || "",
    user: { name: null, email: null, _id: null, error: { status: true } },
    projects: { fetched: false, data: {} },
  },
  mutations: {
    ...authMutation,
    ...projectMutation,
    ...endpointMutation,
  },
  actions: {
    ...projectAction,
    ...authAction,
    ...endpointAction,
  },
  modules: {},
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    projects: (state) => state.projects,
  },
});
