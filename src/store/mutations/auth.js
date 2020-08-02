export default {
    auth_success(state, { token, user }) {
        state.token = token
        state.user = user
    },
    logout(state) {
        state = {
            token: null,
            user: { name: null, email: null, _id: null, error: { status: true, } },
            projects: { fetched: false, data: {}, }
        };
    }
}