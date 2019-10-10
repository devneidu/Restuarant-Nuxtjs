export const state = () => ({
    strategies: 'local',
    loggedIn: false,
    user: false,
    busy: false
});

export const getters = {
    user(state) {
        return state.user
    },
    authenticated(state) {
        return state.loggedIn
    }
}