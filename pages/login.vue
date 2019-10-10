<template>
    <div class="container">
        <div class="mt-3 text-center">
            <div><img src="/logo.png" alt="" width="70" height=""></div>
            <h5 class="b-7 mt-5">LOGIN TO ACCOUNT</h5>
        </div>

        <div class="mt-5">
            <form @submit.prevent="login">
                <div class="form-group">
                    <label class="b-6">Email Address</label>
                    <input type="text" class="form-control br-0" v-model="form.email" :class="[errors.email ? 'is-invalid' : '']">
                      <transition name="error">
                        <span v-if="errors.email" class="invalid-feedback">{{ errors.email[0]}}</span>
                    </transition>
                </div>
                <div class="form-group">
                    <label class="b-6">Password</label>
                    <input type="password" class="form-control br-0" v-model="form.password" :class="[errors.password ? 'is-invalid' : '']">
                      <transition name="error">
                        <span v-if="errors.password" class="invalid-feedback">{{ errors.password[0]}}</span>
                    </transition>
                </div>
                <div class="form-group">
                    <button class="btn btn-block br-0 bg-orange text-white b-7"><span v-if="isSubmit"><i class="fa fa-spin fa-spinner"></i></span> <span v-else>LOGIN</span></button>
                </div>
                
                <div class="mt-2 text-center">
                    <nuxt-link to="/register" class="b-7">Are you a new user?</nuxt-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'auth',
    data() {
        return {
            isSubmit: false,
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
            this.isSubmit = true
            try {
                let { data } = await this.$auth.loginWith('local', {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                })

                this.isSubmit = false
            } catch (error) {
                this.isSubmit = false;
            }

        }
    }
}
</script>