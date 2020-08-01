export default {
    append_endpoint(state, { id, data }) {
        state.projects.data[id].endpoints[data.data.name] = data.data;
    }
}