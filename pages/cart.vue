<template>
    <div :class="[isLightTheme ? 'light-app-body' : 'dark-app-body']">
        <div class="content">
            <div v-if="cart.length < 1">
                <div class="container mt-5 text-center">
                    <img src="/empty-cart.png" alt="cart is empty" class="img-fluid">
                    <nuxt-link to="/" class="b-7 btn btn-green br-0 btn-block">START MAKING ORDERS</nuxt-link>
                </div>
            </div>
            
            <cart-list v-else :cartItems="cart"></cart-list>
        </div>
    </div>
</template>

<script>
import CartList from '@/components/CartList'
import {mapGetters} from 'vuex'
export default {
    components:{
        CartList
    },
    computed:{
        ...mapGetters({
            cart: 'cart/cart'
        })
    },
    async fetch({store, env}){
        await store.dispatch('cart/fetchStreets')
    }
}
</script>
