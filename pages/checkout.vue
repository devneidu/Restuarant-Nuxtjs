<template>
    <div  :class="[isLightTheme ? 'light-app-body' : 'dark-app-body']">
        <div class="content">
            <div class="container">
                <h5 class="b-7 mb-3"  :class="[isLightTheme ? 'text-dark' : 'text-white']">Order Summary</h5>
            </div>
            <form @submit.prevent>
                <div class="px-0"  :class="[isLightTheme ? 'bg-grey-1' : 'bg-dark-1']">
                    <div class="container py-3 text-grey-2">
                        <span>Customer's Information</span>
                        <div class="mt-3">
                            <div class="form-group">
                                <label class="b-5 t-12">Name <sup style="vertical-align: bottom" class="text-danger t-18 mt-0">*</sup></label>
                                <input type="text" class="checkoutInput w-100 br-0 t-14 p-1"  :class="[isLightTheme ? 'bg-white' : 'bg-dark-1 text-white']" required v-model="delivery_name">
                            </div>
                            <div class="form-group">
                                <label class="b-5 t-12">Phone <sup style="vertical-align: bottom" class="text-danger t-18 mt-0">*</sup></label>
                                <input type="text" class="checkoutInput w-100 br-0 t-14 p-1"  :class="[isLightTheme ? 'bg-white' : 'bg-dark-1 text-white']" required v-model="delivery_phone">
                            </div>
                            <div class="form-group">
                                <label class="b-5 t-12">Address <sup style="vertical-align: bottom" class="text-danger t-18 mt-0">*</sup></label>
                                <input type="text" class="checkoutInput w-100 br-0 t-14 p-1"  :class="[isLightTheme ? 'bg-white' : 'bg-dark-1 text-white']" required v-model="delivery_address">
                            </div>
                            <div class="form-group">
                                <label class="b-5 t-12">Additional Note</label>
                                <textarea v-model="note" cols="30" rows="2" class="w-100 br-0 checkoutInput"  :class="[isLightTheme ? 'bg-white' : 'bg-dark-1']"></textarea>
                            </div>
                            <span>
                                <label class="switch mb-3">
                                    <input type="checkbox" @change="pickedBySomeone = !pickedBySomeone">
                                    <span class="slider round"></span> 
                                </label> Is someone else picking it up?
                            </span>
                            
                            <div v-if="pickedBySomeone">
                                <div class="form-group">
                                    <label class="b-5 t-12">Picker's Name <sup style="vertical-align: bottom" class="text-danger t-18 mt-0">*</sup></label>
                                    <input type="text" class="checkoutInput w-100 br-0 t-14 p-1"  :class="[isLightTheme ? 'bg-white' : 'bg-dark-1 text-white']" required v-model="picker_name">
                                </div>
                                <div class="form-group">
                                    <label class="b-5 t-12">Picker's Phone Number <sup style="vertical-align: bottom" class="text-danger t-18 mt-0">*</sup></label>
                                    <input type="text" class="checkoutInput w-100 br-0 t-14 p-1"  :class="[isLightTheme ? 'bg-white' : 'bg-dark-1 text-white']" required v-model="picker_phone">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container pt-3">
                    <h5 class="b-7 mb-3 t-14 "  :class="[isLightTheme ? 'text-dark' : 'text-white']">Order Details</h5>
                
                    <ul class="list-group br-0 history-list">
                        <li v-for="(item, index) in cart" :key="index" class="list-group-item br-0 px-0 d-flex flex-column border-top-0"  :class="[isLightTheme ? 'light-app-card' : 'dark-app-card']">
                            <div class="d-flex justify-content-between mt-2">
                                <span class="b-6 t-12"   :class="[isLightTheme ? '' : 'text-white']">
                                    {{item.name}}
                                </span>
                                <span class="t-11 text-grey-2">{{ item.quantity}} x &#8358;{{item.price}}</span>
                            </div>
                            <div class="my-2 d-flex justify-content-end">
                                
                                <span class="text-orange b-6 t-16">&#8358;{{ item.quantity * item.price}}</span>
                            </div>
                        </li>
                    </ul>

                    <div v-if="$store.getters['cart/orderMethod'] == 'delivery'" class="d-flex justify-content-between mt-2">
                        <span class="b-6 t-14"   :class="[isLightTheme ? '' : 'text-white']">
                            DELIVERY FEE
                        </span>
                        <span class="t-13 text-grey-2">&#8358;{{deliveryFee}}</span>
                    </div>

                    <div class="d-flex justify-content-between mt-2">
                        <span class="b-6 t-14"   :class="[isLightTheme ? '' : 'text-white']">
                            MEAL COST
                        </span>
                        <span class="t-13 text-grey-2">&#8358;{{cartTotal - ($store.getters['cart/orderMethod'] == 'delivery' ? deliveryFee : 0) }}</span>
                    </div>
                    <div class="mt-5 text-center t-22 b-7">
                        <h6 class="text-grey-2 b-7">TOTAL</h6>
                        <span class="text-orange">&#8358;{{cartTotal}}</span>
                    </div>
                    <div class="alert alert-info mt-3"  v-if="user.profile.points >= cartTotal">
                        <strong>You have {{user.profile.points}} points which can be used to order for your meal. We do not deliver if you use points</strong>
                    </div>
                    <div class="mt-3">
                        <span  class="b-7 btn btn-light br-0 btn-block border" @click="$router.go(-1)">GO BACK</span>
                        <div class="mt-2" v-if="user.profile.points >= cartTotal">
                            <button :disabled="disable" @click="usePoints" class="b-7 btn bg-orange br-0 btn-block text-white"><i v-if="isLoading" class="fa fa-spinner fa-spin"></i><span v-else>USE POINTS TO ORDER</span></button>
                            <h5 class="my-2 b-6 text-center" :class="[isLightTheme ? '' : 'text-white']">OR</h5>
                        </div>
                        <button :disabled="disable" @click="usePaystack" class="b-7 mb-4 btn bg-dark-green br-0 btn-block text-white">PROCEED TO PAY</button>
                    </div>
                </div>
            </form>
        </div>
        <div id="paystackEmbedContainer"></div>
    </div>        
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    middleware: ['Checkout'],
    data() {
        return {
            delivery_name: '',
            delivery_address: '',
            delivery_phone: '',
            note: '',
            picker_name: '',
            picker_phone: '',
            pickedBySomeone: false,
            checkoutError: false,
            disable: false,
            isLoading: false
        }
    },
    methods: {
        async usePoints(){
            this.disable = true
            this.checkoutError = false
            this.isLoading = true
            this.validate();
            if(!this.checkoutError){
                let request = this.processedData
                request.payment_type = 'points'
                let {data} = await this.$axios.post('orders', request)
                this.clearCartStorage();
                this.$store.dispatch('cart/clearCart')
                this.toast('success', 'Your order was successful', 'check')
                this.$store.dispatch('cart/selectStreet', 0)
                this.$store.dispatch('cart/setPickUpTime', null)
                this.$store.dispatch('cart/setOrderMethod', 'pick')
                this.$router.push('/history')
                this.isLoading = false  
            }      
        },
        async usePaystack(){
            this.disable = true
            this.checkoutError = false
            this.validate();
            if(!this.checkoutError){
                let request = this.processedData
                request.payment_type = 'cash'
                let {data} = await this.$axios.post('orders', request)
                this.$store.dispatch('cart/selectStreet', 0)
                this.$store.dispatch('cart/setOrderMethod', 'pick')
                this.$store.dispatch('cart/setPickUpTime', null)
                this.paystack(data.data.amount, data.data.trans_ref)

            }
        },
        validate(){
            if(this.delivery_name == '' || this.delivery_address == '' ||  this.delivery_phone == ''){
                this.checkoutError = true;
                this.toast('error', 'Fields with (*) are important', 'times');
            } else if(this.pickedBySomeone && (this.picker_name == '' || this.picker_phone == '')){
                this.checkoutError = true;
                this.toast('error', 'Fields with (*) are important', 'times');
            }
        },
    },
    mounted() {
        this.delivery_address = this.user.profile.address
        this.delivery_name = this.user.profile.first_name + this.user.profile.last_name
        this.delivery_phone = this.user.profile.phone
    },
    computed: {
        ...mapGetters({
            cart: 'cart/cart',
            deliveryFee: 'cart/areaPrice',
            cartTotal: 'cart/cartTotalAmount',
            orderMethod: 'cart/orderMethod',
            pick_up_time: 'cart/pickUpTime',
            selectedStreet: 'cart/selectedStreet',
        }),
        processedData(){
            let data = {
                delivery_name: this.delivery_name,
                delivery_address: this.delivery_address,
                delivery_phone: this.delivery_phone,
                note: this.note,
                pickBySomeone: this.pickedBySomeone ? 1 : 0,
                picker_name: this.picker_name,
                picker_phone: this.picker_phone,
                street_id: this.selectedStreet == 0 || null ? null : this.selectedStreet,
                pick_up_time: this.pick_up_time,
                type: this.orderMethod,
                items: this.cart
            }
            return data
        }
    },
}
</script>