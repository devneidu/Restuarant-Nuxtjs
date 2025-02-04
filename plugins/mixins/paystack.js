import Vue from 'vue'

import axios from 'axios'
import { mapGetters } from "vuex";

const paystack = {
    install(Vue, options){
        Vue.mixin({
            computed: {
                ...mapGetters({
                    user: 'auth/user'
                })
            },
            methods: {
                paystack(amount, trans_ref) {
                    let axios = this.$axios
                    let store = this.$store
                    
                    var handler = PaystackPop.setup({ 
                        key: process.env.PAYSTACK_PUBLIC, //put your public key here
                        email: this.user.email, //put your customer's email here
                        amount: amount * 100, //amount the customer is supposed to pay
                        ref: trans_ref,
                        metadata: {
                            custom_fields: [
                                {
                                    display_name: this.user.name,
                                    value: this.user.phone //customer's mobile number
                                }
                            ]
                        },
                        callback: function (response) {
                            axios.post('/verify', {
                                reference: trans_ref
                            }).then(({data}) => {
                                if(data.success) {
                                    localStorage.setItem('FoodieCart', JSON.stringify([]))
                                    store.dispatch("cart/clearCart")
                                    window.location.href = 'history'
                                } else {
                                    alert('Payment was not successful')
                                }
                            }).catch(err => {
                                
                            })
                        },
                        onClose: function () {
                            alert('Transaction cancelled');

                            store.dispatch("cart/cancelOrder", trans_ref)
                            setTimeout(() => {
                                window.location.href = 'history'
                            }, 500);
                        }
                    });
                    handler.openIframe(); 
                }
            }
        })
    }
}

Vue.use(paystack)