<template>
    <div class="row">
        <div class="col-12 mb-4" v-for="(item, index) in favourites" :key="index">
            <div class="card shadow-md" :class="[isLightTheme ? 'light-app-card' : 'dark-app-card']">
                <img :src="item.image" :alt="item.name" class="img-fluid">
                <div class="p-2">
                    <div class="t-13 text-grey-2 item-title b-6">{{ item.name }}</div>
                    <div class="text-orange t-14 b-7 mt-2">&#8358; {{item.price}}</div>
                    <div class="d-flex justify-content-between mt-2">
                        <span class="br-0 px-2 py-1 t-12 bg-dark-green text-white">Add to Cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        favourites: {
            required: true
        }
    },
}
</script>