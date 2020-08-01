export default {
    project_list(state, projects) {

        let data = {};
        projects.forEach(project => {
            data[project._id] = JSON.parse(JSON.stringify(project));
            let endpoints = {};
            data[project._id]['endpoints'].forEach(endpoint => {
                endpoints[endpoint['endpoint_id']] = JSON.parse(JSON.stringify(endpoint));
            });
            data[project._id]['endpoints'] = endpoints;
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
}