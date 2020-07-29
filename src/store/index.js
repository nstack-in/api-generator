import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let endpoint = process.env.VUE_APP_ENDPOINT;

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    user: {},
    projects: { fetched: false, data: {}, }
  },
  mutations: {
    auth_success(state, token, user) {
      state.token = token
      state.user = user
    },
    project_list(state, projects) {
      let data = {};
      projects.forEach(project => {
        data[project._id] = JSON.parse(JSON.stringify(project));
      });
      state.projects = { fetched: true, data: data };
    },
    project_add(state, project) {
      let data = state.projects;
      let oneData = { id: project._id, data: project };
      data = { ...data, ...oneData };
      console.log(data);
      state.projects = { fetched: false, data: {} };
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${endpoint}/auth/login`,
          data: user,
          method: 'POST'
        })
          .then(resp => {
            console.log(resp);
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    getProjects({ commit }) {
      let token = this.state.token;
      return new Promise((resolve, reject) => {
        if (this.state.projects.fetched) {
          resolve(this.state.projects.data);
        } else {
          axios({
            url: `${endpoint}/project/list`,
            method: 'GET',
            headers: {
              'token': token
            }
          }).then(e => {
            let projects = e.data.data;
            commit('project_list', projects)
            resolve(projects);
          }).catch(e => reject(e))
        }
      });
    },
    getProjectDetail({ commit }, _id) {
      let token = this.state.token;
      let projects = this.state.projects.data;
      let project = projects[_id]
      return new Promise((resolve, reject) => {
        if (project['name'] != null) {
          resolve({ data: project, message: 'From Cache' })
          if (this == "null") {
            commit();
            reject();
          }
        } else {
          axios({
            url: `${endpoint}/project/${_id}`,
            method: 'GET',
            headers: {
              'token': token
            }
          }).then(e => {
            let project = e.data;
            commit('project_add', project)
            resolve(project);
          }).catch(e => reject(e))
        }
      });
    },
    createProject({ commit }, project) {
      let token = this.state.token;
      return new Promise((resolve, reject) => {
        axios({
          url: `${endpoint}/project/new`,
          data: project,
          method: 'POST',
          headers: {
            'token': token
          }
        })
          .then(resp => {
            if (resp.data.error != null) {
              reject(resp.data)
            } else {
              resolve(resp.data)
            }
          })
          .catch(err => {
            console.log(err)
            commit('auth_error')
            reject(err)
          })
      });
    },
    updateProjectDetail({ commit }, { _id, update }) {
      let token = this.state.token;
      return new Promise((resolve, reject) => {
        axios({
          url: `${endpoint}/project/${_id}`,
          data: update,
          method: 'PUT',
          headers: {
            'token': token
          }
        })
          .then(resp => {
            console.log(resp);
            if (resp.data.error != null) {
              reject(resp.data)
            } else {
              resolve(resp.data)
            }
          })
          .catch(err => {
            console.log(err)
            commit('auth_error')
            reject(err)
          })
      });
    }
  },
  modules: {
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})
