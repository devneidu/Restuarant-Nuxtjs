import Vue from 'vue'

import { mapGetters } from 'vuex'

Vue.mixin({
    computed: {
        ...mapGetters({
            user: 'auth/user',
            authenticated: 'auth/authenticated',
        })
    }
})
