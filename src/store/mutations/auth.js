export default {
    auth_success(state, { token, user }) {
        state.token = token
        state.user = user;
    },
    logout(state) {
        state.token = null;
        state.user = { name: null, email: null, _id: null, error: { status: true, } };
        state.projects = { fetched: false, data: {}, };
    }
}