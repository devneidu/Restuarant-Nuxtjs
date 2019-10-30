export const state = () => ({
    history: [],
    showHistory: null
})

export const getters = {
    history(state){
        return state.history
    },
    showHistory(state){
        return state.showHistory
    }
}

export const mutations = {
    POPULATE_OHISTORY(state, payload){
        state.history = payload
    },
    SHOW_HISTORY(state, payload){
        state.showHistory = payload
    }
}

export const actions = {
    async fetcHistory({commit}){
        let { data } = await this.$axios.get('/history')
        commit('POPULATE_OHISTORY', data.data)
    },
    async showHistory({commit}, payload){
        commit('SHOW_HISTORY', payload)
    }
}