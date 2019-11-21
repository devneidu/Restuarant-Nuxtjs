<template>
    <div :class="[isLightTheme ? 'light-app-body' : 'dark-app-body']">
        <div class="content">
            <div class="container">
                <h5 class="b-7 mb-3" :class="[isLightTheme ? 'text-dark' : 'text-white']">Recommended</h5>
                <loading  v-if="recommended.length < 1" ></loading>
                <recommended :recommended="recommended" v-else></recommended>
                <h5 v-if="favourites.length > 0" class="b-7 mb-3 mt-5" :class="[isLightTheme ? 'text-dark' : 'text-white']">Your Favourites</h5>
                <favourites :favourites="favourites"></favourites>
            </div>
        </div>
    </div>
</template>

<script>
import Recommended from '@/components/Recommended'
import Favourites from '@/components/Favourites'
import Loading from '@/components/Loading'
import { mapGetters } from 'vuex'
export default {
    components: {
        Recommended,
        Favourites,
        Loading
    },
    async fetch({store}){
        await store.dispatch('items/fetchRecommended')
        await store.dispatch('items/fetchFavourites')
    },
    computed: {
        ...mapGetters({
            recommended: 'items/recommended',
            favourites: 'items/favourites'
        })
    },
}
</script>