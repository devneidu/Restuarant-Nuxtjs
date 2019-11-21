<template>
    <div class="row">
        <div class="col-12 mb-4" v-for="(item, index) in favourites" :key="index">
            <div class="card shadow-md" :class="[isLightTheme ? 'light-app-card' : 'dark-app-card']">
                <img :src="item.image" :alt="item.name" class="img-fluid">
                <div class="p-2">
                    <div class="t-13 text-grey-2 item-title b-6">{{ item.name }}</div>
                    <div class="text-orange t-14 b-7 mt-2">&#8358; {{item.price}}</div>
                    <div class="d-flex justify-content-between mt-2">
                        <span v-if="checkCartList(item.uuid)" @click="removeFromCart(item)" class="br-0 px-2 py-1 t-11 btn-green text-white">Added</span>
                        <span v-else @click="addToCart(item)" class="br-0 px-2 py-1 t-11 btn-outline-green">Add to cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters}  from 'vuex'
export default {
    props:{
        favourites: {
            required: true
        }
    },
    data(){
        return{
            localStorageName: 'FoodieCart'
        }
    },
    computed: {
        ...mapGetters({
            cart: 'cart/cart'
        })
    },
    methods: {
        addToCart(item){
            let newItem = {
                uuid: item.uuid,
                name: item.name,
                price: item.price,
                discount: item.discount,
                quantity: 1
            }
            this.addToLocalStorage(newItem) // This is a global Mixin  from localStorage.js

            this.toast('success', 'Item added to cart', 'check')
            this.$store.dispatch('cart/addToCart', newItem)
        },
        checkCartList(uuid){
            return this.cart.some(e => {
                return e.uuid == uuid
            }); 
        },
        removeFromCart(item){
            this.removeFromStorage(item) // This is a gloabal mixin from localStorage.js
            this.toast('success', 'Item removed from cart', 'check')
            this.$store.dispatch('cart/removeFromCart', item)
        }
    },
}
</script>