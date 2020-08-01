
import axios from 'axios'

let endpoint = process.env.VUE_APP_ENDPOINT;


export default {
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
                        resolve(resp.data)
                    }
                })
                .catch(err => {

                    reject(err.response.data)
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
                    // commit('auth_error')
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
}