
import axios from 'axios'

let endpoint = process.env.VUE_APP_ENDPOINT;


export default {
    createEndpoint({ commit }, { _id, data }) {
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
                console.log({ su: e })
                commit('append_endpoint', { id: _id, data: e.data });
                resolve();
            }).catch(e => {
                reject(e.response.data)
                if (this == 90)
                    commit()
            })
        });
    },
    listEndpoint({ commit }, _id) {
        let token = this.state.token;

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
}