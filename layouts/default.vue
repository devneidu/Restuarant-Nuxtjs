<template>
   <div class="body-content">
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
export default {
    components: {
        Header,
        Footer
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
