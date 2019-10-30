<template>
    <b-modal id="editProfile" hide-footer centered
    :header-bg-variant="headerBgVariant"
    :header-text-variant="headerTextVariant"
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
    >
        <template v-slot:modal-title success>
            Edit Profile
        </template>
        <form @submit.prevent="editProfile">
            <div class="form-group">
                <label for="" class="t-14 b-7">First Name</label>
                <input type="text" v-model="form.first_name" class="form-control br-0" :class="[errors.first_name ? 'is-invalid' : '']">
                <transition name="error">
                    <span v-if="errors.first_name" class="invalid-feedback">{{ errors.first_name[0]}}</span>
                </transition>
            </div>
            <div class="form-group">
                <label for="" class="t-14 b-7">Last Name</label>
                <input type="text" v-model="form.last_name" class="form-control br-0" :class="[errors.last_name ? 'is-invalid' : '']">
                <transition name="error">
                    <span v-if="errors.last_name" class="invalid-feedback">{{ errors.last_name[0]}}</span>
                </transition>
            </div>
            <div class="form-group">
                <label for="" class="t-14 b-7">Other Name</label>
                <input type="text" v-model="form.other_name" class="form-control br-0">
            </div>
            <div class="form-group">
                <label for="" class="t-14 b-7">Email</label>
                <input type="email" v-model="form.email" class="form-control br-0" :class="[errors.email ? 'is-invalid' : '']">
                <transition name="error">
                    <span v-if="errors.email" class="invalid-feedback">{{ errors.email[0]}}</span>
                </transition>
            </div>
            <div class="form-group">
                <div>
                    <label for="" class="t-14 b-7">Gender</label>
                </div>
                <label class="radio-container">Male
                    <input type="radio" :checked="form.gender == 'male'" v-model="form.gender" value="male">
                    <span class="radiomark"></span>
                </label>
                <label class="radio-container">Female
                    <input type="radio" :checked="form.gender == 'female'" value="female" v-model="form.gender">
                    <span class="radiomark"></span>
                </label>
            </div>
            <div class="form-group">
                <label for="" class="t-14 b-7">Phone</label>
                <input type="text" v-model="form.phone" class="form-control br-0" :class="[errors.phone ? 'is-invalid' : '']">
                <transition name="error">
                    <span v-if="errors.phone" class="invalid-feedback">{{ errors.phone[0]}}</span>
                </transition>
            </div>
            <div class="form-group">
                <label for="" class="t-14 b-7">Address</label>
                <input type="text" v-model="form.address" class="form-control br-0">
            </div>
            <div class="d-flex justify-content-end">
                <b-button class="mt-3 mr-3 br-0" variant="danger" @click="$bvModal.hide('bv-modal-example')">Close</b-button>
                <button type="submit" class="btn-primary mt-3 br-0 btn" :disabled="isSubmit"><span v-if="isSubmit"><i class="fa fa-spin fa-spinner"></i></span> <span>Save Changes</span></button>
            </div>
        </form>
    </b-modal>
</template>

<script>
export default {
    props:{
        userDetails: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            headerBgVariant: 'dark-green',
            headerTextVariant: 'white',
            bodyBgVariant: 'white',
            bodyTextVariant: 'dark',
            form: {
                first_name: this.userDetails.profile.first_name,
                last_name: this.userDetails.profile.last_name,
                other_name: this.userDetails.profile.other_name,
                gender: this.userDetails.profile.gender,
                phone: this.userDetails.profile.phone,
                address: this.userDetails.profile.address,
                email: this.userDetails.email
            },
            isSubmit: false
        }
    },
    methods:{
        async editProfile() {
            this.isSubmit = true

            try {
                let {data} = await this.$axios.post(`/user/${this.user.id}`, this.form)
                this.isSubmit = false
                await this.$store.dispatch('auth/setDetails', data.data)
                this.toast('success', data.msg, 'check-circle')
                this.$bvModal.hide('bv-modal-example');
            } catch (error) {
                this.isSubmit = false
            }
        }
    }
}
</script>