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

export const mutations = {
    SET_DETAILS(state, payload) {
        state.user = payload
    }
}

export const actions = {
    setDetails({commit}, payload){
        commit('SET_DETAILS', payload)
    }
}