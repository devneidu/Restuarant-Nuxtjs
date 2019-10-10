import Vue from 'vue'

Vue.mixin({
    methods: {
        toast(type, message, icon){
            this.$toast.show(message, {
                type: type,
                icon: {
                    name: 'fa fa-check',
                }
            })
        }
    }
})