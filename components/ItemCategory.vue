<template>
    <ul class="categories-btn d-flex mt-4">
        <li @click="setFilter(0)" :class="[currentFiltered == 0 ? 'light-active-btn': '']">All</li>
        <li v-for="(category, index) in categories" :key="index" :class="[currentFiltered == category.id ? 'light-active-btn': '']" @click="setFilter(category.id)">{{category.name}}</li>
    </ul>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props:{
        categories: {
            required: true,
        }
    },
    computed:{
        ...mapGetters({
            currentFiltered: 'items/currentFiltered',
            allItems: 'items/filteredItems',
        })
    },
    methods: {
        setFilter(value){
            this.$store.dispatch('items/setFilter', value)
        }
    }
}
</script>