<template>
<div>
    <div class="shadow-sm p-2 mb-3"  v-for="(history, index) in histories" :key="index" :class="[isLightTheme ? 'light-app-card border' : 'dark-app-card']">
        <h6 class="b-6 d-flex justify-content-between" :class="[isLightTheme ? 'text-grey-2' : 'text-white']">
            <span>#{{history.serial}}</span>
            <span class="text-orange">&#8358;{{history.total_amount}}</span>
        </h6>
        <h6>
            <span class="text-grey-2">July 2, 2019</span>
        </h6>
        <div class="text-center">
            <span @click="showHistory(history)" class="btn btn-sm  bg-dark-green text-white br-0">View</span>
        </div>
    </div>

    
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

    props:{
        histories:{
            required: true
        }
    },
    methods:{
        showHistory(history){
            this.$bvModal.show('historyModal')
            this.$store.dispatch('history/showHistory', history)
        }
    },
   
}
</script>