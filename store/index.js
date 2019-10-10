export  const state = () => ({
    isLightTheme: null
});

export const getters = {
    isLightTheme(state) {
        return state.isLightTheme
    }
}

export const mutations = {
    CHANGE_THEME(state, payload){
        state.isLightTheme = payload
    }
}

export const actions = {
    changeTheme({commit}, payload){
        commit('CHANGE_THEME', payload)
    }
}