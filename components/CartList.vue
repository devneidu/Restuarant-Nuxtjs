<template>
    <div class="container">
        <h5 class="b-7 mb-3" :class="[isLightTheme ? 'text-dark' : 'text-white']">Shopping Cart</h5>
        <transition-group name="cartList" tag="ul" class="list-group br-0 history-list">
            <li v-for="(cart) in cartItems" :key="cart.uuid" class="list-group-item br-0 px-0 d-flex flex-column" :class="[isLightTheme ? 'light-app-card' : 'dark-app-card']">
                <div class="d-flex justify-content-between mt-2">
                    <span class="b-6 t-14" :class="[isLightTheme ? 'text-dark' : 'text-white']">
                        {{ cart.name }}
                    </span>
                    <span class="t-13 text-grey-2">{{cart.quantity}} x &#8358;{{cart.price}}</span>
                </div>
                <div class="my-2 d-flex justify-content-between">
                    <span>
                        <input type="text" name="" class="checkoutInput t-10 text-center"  :class="[isLightTheme ? 'bg-white' : 'dark-app-card text-white']" maxlength="2" size="4"
                        :value="cart.quantity"  @blur="changeQuantity({$event}, cart.uuid)" @keyup.enter="changeQuantity({$event}, cart.uuid)"
                        >
                        <span @click="removeFromCart(cart)" class="bg-orange text-white t-10 p-1"><i class="fa fa-trash text-dange"></i> Remove</span>
                    </span>
                    <span class="b-6 t-16" :class="[isLightTheme ? 'text-grey-2' : 'text-white']">&#8358;{{multiply(cart.quantity, cart.price)}}</span>
                </div>
            </li>
        </transition-group>

        <h5 class="b-7 mb-3 mt-5"  :class="[isLightTheme ? 'text-dark' : 'text-white']">Order Method</h5>
        <h6 class="mt-2" :class="[isLightTheme ? 'text-grey-2' : 'text-white']">Note: Delivery can only be made from &#8358;2000 and above</h6>
        <label v-if="$store.getters['cart/cartTotalAmount'] >= 2000 || $store.getters['cart/orderMethod'] == 'delivery' " class="radio-container">Delivery
            <input type="radio" :checked="$store.getters['cart/orderMethod'] == 'delivery'" name="type"  @change="setOrderMethod('delivery')">
            <span class="radiomark"></span>
        </label>
        <label class="radio-container">Pick Up
            <input type="radio" name="type" :checked="$store.getters['cart/orderMethod'] == 'pick' || $store.getters['cart/cartTotalAmount'] < 2000" @change="setOrderMethod('pick')">
            <span class="radiomark"></span>
        </label>
        <transition name="orderMethod" mode="out-in">
            <div v-if="$store.getters['cart/orderMethod'] == 'pick' " class="form-group" key="delivery">
                <label class="b-6  text-grey-2">Pick Up Time</label>
                <input :value="$store.getters['cart/pickUpTime']" ref="time" type="time" class="checkoutInput w-100 br-0 t-14 p-1"  :class="[isLightTheme ? 'bg-white' : 'bg-dark-1 text-white']">
                <h6 class="mt-2" :class="[isLightTheme ? 'text-grey-2' : 'text-white']">Note: Please we advise that you give us 45minutes to prepare your meal.</h6>
            </div>
            <div v-if="$store.getters['cart/orderMethod'] == 'delivery'" class="form-group mt-2" key="pick">
                <label class="b-6  text-grey-2">Delivery Area</label>
                <select @change="selectStreet({$event})" class="checkoutInput w-100 br-0 t-14 p-1"  :class="[isLightTheme ? 'bg-white' : 'bg-dark-1 text-white']" :disabled="streets.length < 1">
                    <option value="0">Select your area</option>
                    <option :selected="$store.getters['cart/selectedStreet'] == street.id" v-for="(street, index) in streets" :value="street.id" :key="index">{{ street.address }}</option>
                </select>
                <transition name="cartList">
                    <h6 v-if="selectedStreet" class="mt-2" :class="[isLightTheme ? 'text-grey-2' : 'text-white']">Note: Delivery time is between <strong>{{getDeliveryTime}}</strong> minutes for this location.</h6>
                </transition>
            </div>
        </transition>
        <div class="mt-5 text-center t-22 b-7">
            <h6 class="text-grey-2 b-7">TOTAL</h6>
          
            <span class="text-orange">&#8358;{{ $store.getters['cart/cartTotalAmount']}}</span>
        </div>
        <div class="my-5">
            <button class="b-7 btn btn-light br-0 btn-block border" @click="clearCart">CLEAR CART</button>
            <button @click="checkout" class="b-7 btn btn-green br-0 btn-block"><i v-if="loading" class="fa fa-spin fa-spinner b-7 mr-2"></i>CHECKOUT</button>
            <transition name="cartList">
                <h6 v-if="checkoutError" class="text-danger mt-2">{{ checkoutError }}</h6>
            </transition>
        </div>
    </div>
</template>

<script>
import {mapGetters} from  'vuex'
export default {
    props:{
        cartItems:{
            required: true
        }
    },
    data() {
        return {
            checkoutError: null,
            pickUpTime: '',
            loading: false
        }
    },
    
    methods:{
        multiply(quantity, price){
            return quantity*price
        },
        changeQuantity({$event}, uuid){
            if($event.target.value == 0 || $event.target.value == '' || isNaN($event.target.value)){
                $event.target.value = 1
                this.updateStorage(uuid, 1)
                this.$store.dispatch('cart/updateCart', {uuid:uuid, quantity: 1})
            } else {
                this.updateStorage(uuid, $event.target.value)
                this.$store.dispatch('cart/updateCart', {uuid:uuid, quantity: $event.target.value})
            }
        },
        removeFromCart(item){
            this.removeFromStorage(item) // This is a gloabal mixin from localStorage.js
            this.toast('success', 'Item removed from cart', 'check')
            this.$store.dispatch('cart/removeFromCart', item)
        },
        clearCart(){
            this.clearCartStorage();
            this.$store.dispatch('cart/clearCart')
            this.toast('success', 'Your cart is cleared', 'check')
        },
        setOrderMethod(value){
            this.$store.dispatch('cart/setOrderMethod', value)
        },
        selectStreet({$event}){
            this.$store.dispatch('cart/selectStreet', $event.target.value)
        },
        checkout(){
            this.checkoutError = null
            if(this.orderMethod == 'delivery' && !this.selectedStreet){
                this.checkoutError = 'Please select delivery area'
            } else if(this.orderMethod == 'delivery' && this.selectedStreet){
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    this.$router.push('/checkout')
                }, 2000);
            }

            if(this.orderMethod == 'pick' && this.$refs.time.value == ''){
                this.checkoutError = 'Please select pickup time'
            } else if(this.orderMethod == 'pick' && this.$refs.time.value != ''){
                let time = this.$refs.time.value
                time = time.replace(':', '')
                this.loading = true
                this.$store.dispatch('cart/setPickUpTime',this.$moment(time, "hmm").format("HH:mm:ss"))
                setTimeout(() => {
                    this.loading = false
                    this.$router.push('/checkout')
                }, 2000);
            }
        }
    },
    computed: {
        ...mapGetters({
            streets: 'cart/streets',
            selectedStreet: 'cart/selectedStreet',
            orderMethod: 'cart/orderMethod'
        }),
        getDeliveryTime(){
            let street = this.streets.find(street => street.id == this.selectedStreet)
            return street.from+'-'+street.to
        }
    },
}
</script>

<style scoped>
.cartList-enter-active, .cartList-leave-active{
    transition: opacity .4s ease, transform 0.4s ease
}
.cartList-enter, .cartList-leave-to{
    opacity: 0;
    transform: translateY(40px)
}
.cartList-enter-to, .cartList-leave{
    opacity: 1;
    transform: translateY(0px)
}
.orderMethod-enter-active, .orderMethod-leave-active{
    transition: opacity .4s ease, transform 0.4s ease
}
.orderMethod-enter, .orderMethod-leave-to{
    opacity: 0;
    transform: translateY(4px)
}
.orderMethod-enter-to, .orderMethod-leave{
    opacity: 1;
    transform: translateY(0px)
}
</style>