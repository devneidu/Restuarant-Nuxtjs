<template>
    <div :class="[isLightTheme ? 'light-app-body' : 'dark-app-body']">
        <div class="content">
            <div class="container">
                <input type="text" class="form-control search-bar br-0 shadow-sm"  :class="[isLightTheme ? 'light-search-bar' : 'dark-search-bar']">
                <span class="search-icon">
                    <i class="fa fa-search"></i>
                </span>

                <!-- CATEGORIES --> 
                <div v-if="categories.length < 1" class="linear-background"  :class="[isLightTheme ? 'light-app-loading' : 'dark-app-loading']"></div>
                <item-category v-else :categories="categories"></item-category>

                <!-- FOOD SECTION -->
                <loading  v-if="allItems.length < 1" ></loading>
                <index-menu v-else :allItems="allItems"></index-menu>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemCategory from '@/components/ItemCategory'
import IndexMenu from '@/components/IndexMenu'
import Loading from '@/components/Loading'
export default {
    components: {
        ItemCategory,
        IndexMenu,
        Loading
    },
    async fetch({store, $axios}) {
        await store.dispatch('items/fetchItems')
    },
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters({
            categories: 'items/categories',
            allItems: 'items/filteredItems',
        })
    },
    methods: {
        onScroll() {
            this.$el.onscroll = () => {
                if(this.$el.scrollHeight > this.$el.scrollTop && this.count < 70) {
                    console.log(this.count++);
                }
            }
        }
    },
    mounted () {
        this.onScroll();
    }
}
</script>