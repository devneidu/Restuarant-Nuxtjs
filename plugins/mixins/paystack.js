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
                            //after the transaction have been completed
                            //make post call  to the server with to verify payment 
                            //using transaction reference as post data
                            
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

                            // axios.post('/verify', )
                        },
                        onClose: function () {
                            //when the user close the payment modal
                            alert('Transaction cancelled');

                            store.dispatch("cart/cancel", reference)
                        }
                    });
                    handler.openIframe(); //open the paystack's payment modal
                }
            }
        })
    }
}

Vue.use(paystack)