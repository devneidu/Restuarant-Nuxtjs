<template>
    <b-modal id="historyModal" hide-footer centered
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
     >
        <template v-slot:modal-title success>
            <span class="b-7">#{{history.serial}}</span>
        </template>
        
        <div v-if="history" class="">
            <div class="d-flex justify-content-between">
                <span class="text-grey-2">DATE</span>
                <span class="text-grey-2">ORDER TYPE</span>
            </div>
            <div class="d-flex justify-content-between mb-4">
                <span class="b-6">{{ $moment(history.date).format('YYYY-MM-DD HH:mm')}}</span>
                <span class="b-6" style="text-transform: uppercase">{{history.type}}</span>
            </div>
            <div class="text-center my-3 t-18 b-7">
                By {{history.payment_type}}
            </div>
            <div v-for="(item, index ) in history.items" :key="index" class="bg-light-green p-1 my-3 t-14">
                <div class="d-flex justify-content-between">
                    <span class="">{{ item.name}}</span>
                    <span class="b-6">&#8358;{{item.total}}</span>
                </div>
                <span>x{{ item.quantity}}</span>
            </div>

            <hr class="my-2">
            <div class="d-flex justify-content-between mt-3">
                <span class="t-18 b-7">TOTAL</span>
                <span class="t-18 b-7 text-orange">&#8358;{{history.total_amount}}</span>
            </div>
        </div>
        <div v-else class="alert alert-info">
            <strong>Something went wrong</strong>
        </div>
    </b-modal>
</template>

<script>
export default {
    props: {
        history: {
            required: true
        }
    },
    data(){
        return {
            show: false,
            headerBgVariant: 'dark-green',
            headerTextVariant: 'white',
            bodyBgVariant: 'white',
            bodyTextVariant: 'dark',
            isSubmit: false
        }
    },
}
</script>