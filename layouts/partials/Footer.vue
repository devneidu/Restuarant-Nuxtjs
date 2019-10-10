<template>
    <div class="light-app-footer app-footer">
        <nuxt-link to="/" class="t-24">
            <i class="fa fa-home text-grey-2"></i>
        </nuxt-link>
        <nuxt-link  to="/discover" class="t-24">
            <i class="fa fa-heart text-grey-2"></i>
        </nuxt-link>
        <a href="/cart" @click.prevent="goToCart">
            <div class="footer-cart mx-auto shadow">
                <i class="fa fa-shopping-cart"></i>
            </div>
        </a>
        <nuxt-link to="/history" class="t-24">
            <i class="fa fa-history text-grey-2"></i>
        </nuxt-link>
        <nuxt-link to="/account" class="t-24">
            <i class="fa fa-user text-grey-2"></i>
        </nuxt-link>
    </div>
</template>


<script>
export default {
    methods:{
        goToCart(){
            this.$router.push('/cart')
            // this.$nuxt.$loading.start()
            // setTimeout(()=>{
            //     this.$nuxt.$loading.finish()
            // }, 1000)
        }
    }
}
</script>
