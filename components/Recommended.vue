<template>
    
    <div>
        <div class="shadow-md  mobile-details mb-3" v-for="(item, index) in recommended" :key="index" :class="[isLightTheme ? 'border' : '']">
            <div class="imageWrapper ">
                <img :src="item.image" :alt="item.name" class="img-fluid">
                <div class="cornerLink"></div>
            </div>
            <div class="p-2 shadow-sm .fa-details-display" style="width: 100%" :class="[isLightTheme ? 'light-app-card' : 'dark-app-card']">
                <div class="t-13 text-grey-2 item-title b-6" style="height: 35px">{{ item.name }}</div>
                <div class="text-orange t-14 b-7 mt-2">&#8358; {{item.price}}</div>
                <div class="d-flex justify-content-between mt-2">
                    <span class="br-0 px-3 py-1 t-13 bg-dark-green text-white">Add to Cart</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        recommended: {
            required: true
        }
    },
    methods: {
        favourite(value){
            this.$store.dispatch('items/setFavourite', value)
        }
    }
}
</script>