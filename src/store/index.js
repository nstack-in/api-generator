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
      let data = state.projects.data;
      data[project._id] = project;
      let fetched = state.projects.fetched;
      state.projects = { fetched, data };
    },
    update_project(state, project) {
      let data = state.projects.data;
      let fetched = state.projects.fetched;
      data[project._id] = project;
      state.projects = { fetched, data };
    },
    remove_project(state, _id) {
      let data = state.projects.data;
      delete data[_id];
      state.projects.data = data;
    }
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
        if (project != null) {
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
            commit('project_list', [project.data])
            resolve(project);
          }).catch(e => reject(e))
        }
      });
    },
    createProject({ commit }, project) {
      let token = this.state.token;
      return new Promise((resolve, reject) => {
        axios(
          {
            url: `${endpoint}/project/new`,
            data: project,
            method: 'POST',
            headers: {
              'token': token
            }
          })
          .then(resp => {
            if (resp.data.error.status) {
              reject(resp.data.response)
            } else {
              commit('project_add', resp.data.data)
              console.log(resp)
              resolve(resp.data)
            }
          })
          .catch(err => {
            console.log(err)

            reject(err.response.data)
          })
      });
    },
    createEndpoint({ commit }, { _id, data }) {
      console.log(_id);
      let token = this.state.token;
      return new Promise((resolve, reject) => {
        axios({
          url: `${endpoint}/project/${_id}/new`,
          method: 'POST',
          data: data,
          headers: {
            'token': token
          }
        }).then(e => {
          console.log({ succ: e })
          resolve();
        }).catch(e => {
          console.log({ ee: e })
          reject()
          commit()
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
            if (resp.data.error != null) {
              reject(resp.data)
            } else {
              commit('update_project', resp.data.data);
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
    deleteProject({ commit }, { _id }) {
      let token = this.state.token;

      return new Promise((resolve, reject) => {
        axios({
          url: `${endpoint}/project/${_id}`,
          method: 'DELETE',
          headers: {
            'token': token
          }
        }).then(res => {
          commit('remove_project', _id);

          resolve(res.data);
        }).catch(err => {
          reject(err.response.data);
        })

      });
    },
    listEndpoint({ commit }, _id) {
      let token = this.state.token;
      console.log()

      return new Promise((resolve, reject) => {
        axios({
          url: `${endpoint}/project/${_id}/list`,
          method: 'GET',
          headers: {
            'token': token
          }
        }).then(res => {
          resolve(res.data);
        }).catch(err => {
          reject(err.response.data);
          commit()
        })

      });
    },
    deleteEndpoint({ commit }, { _id, _eid }) {
      let token = this.state.token;
      return new Promise((resolve, reject) => {
        axios({
          url: `${endpoint}/project/${_id}/${_eid}`,
          method: 'DELETE',
          headers: {
            'token': token
          }
        }).then(res => {
          resolve(res.data);
        }).catch(err => {
          reject(err.response.data);
          commit()
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
