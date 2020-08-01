export default {
    auth_success(state, { token, user }) {
        state.token = token
        state.user = user
    }
}