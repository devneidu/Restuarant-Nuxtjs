<template>
    <div class="app-header"  :class="[isLightTheme ? 'light-app-header' : 'dark-app-header']">
        <div class="container">
            <div class="d-flex justify-content-between">
                <div class="app-logo">
                    <img src="/logo.png" alt="" height="50" width="50">
                </div>
                <div v-if="$route.name != 'checkout'" class="app-cart d-flex flex-row">
                    <div><i class="fa text-grey-2 fa-shopping-cart"></i></div>
                    <div class="cart-counter">5</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        
    }
}
</script>