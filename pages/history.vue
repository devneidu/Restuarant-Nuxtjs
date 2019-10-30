<template>
    <div :class="[isLightTheme ? 'light-app-body' : 'dark-app-body']">
        <div class="content">
            <div class="container">
                <h5 class="b-7 mb-3"   :class="[isLightTheme ? 'text-dark' : 'text-white']">Order History</h5>
                <div v-if="histories.length < 1" class="text-center">
                    <img src="/no-history.jpg" alt="no history " srcset="">
                    <strong>You have no order</strong>
                </div>
                
                <history-list v-else :histories="histories"></history-list>
            </div>
        </div>
        <history-display :history="history"></history-display>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HistoryList from'@/components/HistoryList'
import HistoryDisplay from '@/components/HistoryDisplay'
export default {
    components: {
        HistoryList,
        HistoryDisplay
    },
    async fetch({store}){
        await store.dispatch('history/fetcHistory')
    },
    computed:{
        ...mapGetters({
            histories: 'history/history',
            showHistory: 'history/showHistory',
            history: 'history/showHistory'
        })
    },
    methods:{
        
    }
}
</script>