export const state = () => ({
    allItems : [],
    categories: [],
    favourites: [],
    recommended: [],
    currentFiltered: 0
})

export const getters = {
    categories(state){
        return state.categories
    },
    allItems(state){
        return state.allItems
    },
    favourites(state){
        return state.favourites
    },
    recommended(state){
        return state.recommended
    },
    filteredItems(state) {

        if(state.currentFiltered == 0) {
            return state.allItems
        } else {
            return state.allItems.filter((item) =>{
                return item.category == state.currentFiltered
            })
        }
    },
    currentFiltered(state){
        return state.currentFiltered
    }
}

export const mutations = {
    POPULATE_CATEGORIES(state, payload){
        state.categories = payload
    },
    POPULATE_ITEMS(state, payload){
        state.allItems = payload
    },
    POPULATE_FAVOURITES(state, payload){
        state.favourites = payload
    },
    POPULATE_RECOMMENDED(state, payload){
        state.recommended = payload
    },
    SET_FILTERED(state, payload){
        state.currentFiltered = payload
    },
    SET_FAVOURITE(state, payload){
        let index = state.allItems.findIndex(item => item.id == payload)
        let update = state.allItems.find(item => item.id == payload);
        update.favourite = update.favourite == 0 ? 1 : 0
        state.allItems.splice(index, 1, update)
    }
}

export const actions = {
    async fetchItems({commit, dispatch}) {
        await dispatch('fetchCategories')
        let {data} = await this.$axios.get('/items')
        commit('POPULATE_ITEMS', data.data)

    },
    async fetchCategories({commit}){
        let {data} = await this.$axios.get('/categories')
        commit('POPULATE_CATEGORIES', data.data)
    },
    async fetchFavourites({commit}){
        let {data} = await this.$axios.get('/favourites')
        commit('POPULATE_FAVOURITES', data.data)
    },
    async fetchRecommended({commit}){
        let {data} = await this.$axios.get('/recommended')
        commit('POPULATE_RECOMMENDED', data.data)
    },
    setFilter({commit}, payload){
        setTimeout(() => {
            commit('SET_FILTERED', payload)
        },500)
    },
    async setFavourite({commit}, payload){
        await this.$axios.post(`items/${payload}/favourite`)
        commit('SET_FAVOURITE', payload)
    }
}