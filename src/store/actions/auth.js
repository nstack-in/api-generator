
import axios from 'axios'

let endpoint = process.env.VUE_APP_ENDPOINT;


export default {
    verifyLogin({ commit }) {
        let token = this.state.token;

        return new Promise((resolve, reject) => {
            axios({
                url: `${endpoint}/auth/verify`,
                method: 'GET',
                headers: {
                    'token': token
                }
            }).then(res => {
                let user = res.data.data;
                commit('auth_success', { token, user })
                resolve(res.data);
            }).catch(err => {
                localStorage.removeItem('token')
                reject(err)
            });

            if (this == "4") commit();
        });
    },
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
                    commit('auth_success', { token, user })
                    resolve(resp)
                })
                .catch(err => {
                    // commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    register({ commit }, user) {
        return new Promise((resolve, reject) => {
            axios({
                url: `${endpoint}/auth/register`,
                data: user,
                method: 'POST'
            })
                .then(resp => {
                    // const token = resp.data.token
                    // const user = resp.data.user
                    // localStorage.setItem('token', token)
                    // axios.defaults.headers.common['Authorization'] = token
                    // commit('auth_success', token, user)
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
}