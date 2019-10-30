export const state = () => ({
    cart: [],
    orderMethod: 'pick',
    areaPrice: 0,
    streets: [],
    selectedStreet: null,
    pickUpTime: null
})

export const getters = {
    cart(state) {
        return state.cart
    },
    cartCount(state){
        return state.cart.length
    },
    cartTotalAmount(state){
        let calc =  state.cart.reduce((zero, item) => {
            return (parseFloat(item.price) * parseFloat(item.quantity)) + zero
        }, 0)
        return calc + (state.orderMethod == 'pick' ? 0 : state.areaPrice)
    },
    orderMethod(state){
        return state.orderMethod
    },
    streets(state){
        return state.streets
    },
    selectedStreet(state){
        return state.selectedStreet
    },
    areaPrice(state){
        return state.areaPrice
    },
    pickUpTime(state){
        return state.pickUpTime
    }
}

export const mutations = {
    POPULATE_LIST(state, payload){
        state.cart.push(payload)
    },
    INITIATE_CART(state, payload){
        state.cart = payload
    },
    REMOVE_ITEM(state, payload){
        let index = state.cart.findIndex((item)=> {
            return item.uuid == payload.uuid
        })
        state.cart.splice(index, 1)
    },
    UPDATE_CART(state, payload){
        let index = state.cart.findIndex((item)=> {
            return item.uuid == payload.uuid
        })
        state.cart[index].quantity = payload.quantity
    },
    CLEAR_CART(state){
        state.cart = []
    },
    SET_ORDER_METHOD(state, payload){
        state.orderMethod = payload
    },
    POPULATE_STREET(state, payload){
        state.streets = payload
    },
    SELECT_STREET(state, payload){
        state.selectedStreet = payload
    },
    SET_AREA_PRICE(state, payload){
        state.areaPrice = payload
    },
    SET_TIME(state, payload){
        state.pickUpTime = payload
    }
}

export const actions = {
    addToCart({commit}, payload){
        commit('POPULATE_LIST', payload)
    },
    async initiateCart({commit}, payload){
        await commit('INITIATE_CART', payload)
    },
    async removeFromCart({commit}, payload){
        commit('REMOVE_ITEM', payload)
    },
    async updateCart({commit}, payload){
        commit('UPDATE_CART', payload)
    },
    clearCart({commit}){
        commit('CLEAR_CART')
    },
    setOrderMethod({commit}, payload){
        commit('SET_ORDER_METHOD', payload)
    },
    async fetchStreets({commit}){
        let {data} = await this.$axios.get('/streets')
        commit('POPULATE_STREET', data.data)
    },
    async selectStreet({commit, getters, state}, payload){
        if(payload == 0){
            await commit('SELECT_STREET', 0)
            await commit('SET_AREA_PRICE', 0)
        } else {
            let areaPrice = parseFloat(state.streets.find(street => street.id == payload).fees)
            await commit('SELECT_STREET', payload)
            await commit('SET_AREA_PRICE', areaPrice)
        }
    },
    async setPickUpTime({commit}, payload){
        await commit('SET_TIME', payload)
    }
}