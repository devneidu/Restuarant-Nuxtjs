<template>
   <div class="body-content"    :class="[isLightTheme ? 'light-app-body' : 'dark-app-body']">
       <div class="app-wrapper">
            <Header></Header>
            <transition name="page"  mode="out-in">
                <nuxt />
            </transition>
            <Footer></Footer>
        </div>
   </div>
</template>

<script>
import Header from './partials/Header'
import Footer from './partials/Footer'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        Header,
        Footer
    },
    middleware: ['auth'],
    data() {
        return {
            isLight: null
        }
    },
    mounted() {
        if(localStorage.getItem('appTheme')){
            this.isLight = JSON.parse(localStorage.getItem('appTheme'))
            this.$store.dispatch('changeTheme', this.isLight)
        } else {
            localStorage.setItem('appTheme', JSON.stringify(true))
            this.$store.dispatch('changeTheme', true)
        }

        if(localStorage.getItem('FoodieCart')){
            this.$store.dispatch('cart/initiateCart', JSON.parse(localStorage.getItem('FoodieCart')))
        } else {
            this.$store.dispatch('cart/initiateCart', [])
            localStorage.setItem('FoodieCart', JSON.stringify([]))
        }
    }

}
</script>

<style>
    .page-enter-active, .page-leave-active{
        transition: opacity .5s ease-in-out, transform 0.5s ease
    }
    .page-enter, .page-leave-to{
        opacity: 0;
        transform: translateX(100px)
    }
    .page-enter-to, .page-leave{
        opacity: 1;
        transform: translateX(0)
    }
</style>
