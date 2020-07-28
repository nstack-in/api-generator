import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let endpoint = process.env.VUE_APP_ENDPOINT;

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
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
      if(this == null){
        commit('auth_error')
      }
      return new Promise((resolve, reject) => {
        axios({
          url: `${endpoint}/project/list`,
          method: 'GET',
          headers:{
            'token' : token
          }
        }).then(e=>{
          console.log(e)
          resolve(e.data.data);
        }).catch(e=>reject(e))
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
