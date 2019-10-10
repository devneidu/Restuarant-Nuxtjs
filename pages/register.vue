<template>
    <div class="container">
        <div class="mt-3 text-center">
            <div><img src="/logo.png" alt="" width="70" height=""></div>
            <h5 class="b-7 mt-5">CREATE NEW ACCOUNT</h5>
        </div>

        <div class="mt-5">
            
            <form @submit.prevent="register">
                <div class="form-group">
                    <label class="b-6 ">First Name</label>
                    <input type="text" v-model="form.first_name" class="form-control br-0" :class="[errors.first_name ? 'is-invalid' : '']">
                    <transition name="error">
                        <span v-if="errors.first_name" class="invalid-feedback">{{ errors.first_name[0]}}</span>
                    </transition>
                </div>
                <div class="form-group">
                    <label class="b-6 ">Last Name</label>
                    <input type="text" v-model="form.last_name" class="form-control br-0" :class="[errors.last_name ? 'is-invalid' : '']">
                    <transition name="error">
                        <span v-if="errors.last_name" class="invalid-feedback">{{ errors.last_name[0]}}</span>
                    </transition>
                </div>
                <div class="form-group">
                    <label class="b-6 ">Other Name</label>
                    <input type="text" v-model="form.other_name" class="form-control br-0">
                </div>
                <div class="form-group">
                    <label class="b-6 ">Email Address</label>
                    <input type="email" v-model="form.email" class="form-control br-0" :class="[errors.email ? 'is-invalid' : '']">
                    <transition name="error">
                        <span v-if="errors.email" class="invalid-feedback">{{ errors.email[0]}}</span>
                    </transition>
                </div>
                <div class="form-group">
                    <label class="b-6 ">Password</label>
                    <input type="password" v-model="form.password" class="form-control br-0" :class="[errors.password ? 'is-invalid' : '']">
                    <transition name="error">
                        <span v-if="errors.password" class="invalid-feedback">{{ errors.password[0]}}</span>
                    </transition>
                </div>
                <div class="form-group">
                    <label class="b-6 ">Phone</label>
                    <input type="text" v-model="form.phone" class="form-control br-0" :class="[errors.phone ? 'is-invalid' : '']">
                    <transition name="error">
                        <span v-if="errors.phone" class="invalid-feedback">{{ errors.phone[0]}}</span>
                    </transition>
                </div>
                <div class="form-group">
                    <label class="b-6 ">Address</label>
                    <input type="text" v-model="form.address" class="form-control br-0">
                </div>
                <div class="form-group">
                    <div>
                        <label class="b-6 ">Gender</label>
                    </div>
                    <label class="radio-container">Male
                        <input type="radio" v-model="form.gender" name="gender" value="male">
                        <span class="radiomark"></span>
                    </label>
                    <label class="radio-container">Female
                        <input type="radio" v-model="form.gender" name="gender" value="female">
                        <span class="radiomark"></span>
                    </label>
                </div>
                <div class="form-group">
                    <button class="btn btn-block br-0 bg-orange text-white b-7"><span v-if="isSubmit"><i class="fa fa-spin fa-spinner"></i></span> <span v-else>REGISTER</span></button>
                </div>
                <div class="mt-2 text-center">
                    <nuxt-link to="/login" class="b-7">Already have an account?</nuxt-link>
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
            form: {
                first_name: '',
                last_name: '',
                other_name: '',
                gender: '',
                email: '',
                password: '',
                address: '',
                phone: ''
            },
            isSubmit: false
        }
    },
    methods: {
        async register(){
            this.isSubmit = true
            try {
                await this.$axios.post('/register', this.form)

                await this.$auth.loginWith('local', {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                })
                this.toast('success', 'Thank you for signing up with us!!! ', 'check-circle')
                this.$router.push('/')
                this.isSubmit = false
            } catch (error) {
                this.isSubmit = false
            }
        }
    }
}
</script>

