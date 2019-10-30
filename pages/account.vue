<template>
    <div :class="[isLightTheme ? 'light-app-body' : 'dark-app-body']">
        <div class="content">
            <div class="container">
                <div class="d-flex justify-content-end">
                    <i class="fa fa-pen t-20 mr-3 text-info" @click="showModal"></i>
                </div>
                <div class="text-center mt-5">
                    <img src="/profile.png" alt="" width="105" height="105">
                    <h4 class="my-4 b-7"  :class="[isLightTheme ? 'text-black' : 'text-white']">{{fullName}}</h4>
                </div>
                <div class="row">
                    <div class="col-6 text-center border-right">
                        <h2 class="text-dark-green b-6">{{ user.profile.points }}</h2>
                        <p class="text-grey-2">Total Points</p>
                    </div>
                    <div class="col-6 text-center">
                        <h2 class="text-dark-green b-6">2</h2>
                        <p class="text-grey-2">Total Orders</p>
                    </div>
                </div>
            </div>
            <h6 class="text-grey-2 mt-3"  :class="[isLightTheme ? 'bg-grey-1' : 'bg-dark-1']">
                <div class="container py-3">Account Information</div>
            </h6>
            <div class="border-bottom">
                <div class="container py-2">
                    <h6 class="b-6" :class="[isLightTheme ? 'text-black' : 'text-white']">Email</h6>
                    <p class="text-grey-2 mb-0">{{user.email}}</p>
                </div>
            </div>
            <div class="border-bottom">
                <div class="container py-2">
                    <h6 class="b-6" :class="[isLightTheme ? 'text-black' : 'text-white']">Phone Number</h6>
                    <p class="text-grey-2 mb-0">{{user.profile.phone}}</p>
                </div>
            </div>
            <div class="border-bottom">
                <div class="container py-2">
                    <h6 class="b-6" :class="[isLightTheme ? 'text-black' : 'text-white']">Gender</h6>
                    <p class="text-grey-2 mb-0">{{ user.profile.gender }}</p>
                </div>
            </div>
            <div>
                <div class="container py-2">
                    <h6 class="b-6" :class="[isLightTheme ? 'text-black' : 'text-white']">Address</h6>
                    <p class="text-grey-2 mb-0">{{ user.profile.address }}</p>
                </div>
            </div>
            <h6 class="text-grey-2 mt-3"  :class="[isLightTheme ? 'bg-grey-1' : 'bg-dark-1']">
                <div class="container py-3">App Settings</div>
            </h6>
            <div class="border-bottom">
                <div class="container py-2">
                    <h6 class="b-6 d-flex justify-content-between">
                        <span :class="[isLightTheme ? 'text-black' : 'text-white']">Dark Theme</span>
                        <span>
                            <label class="switch mb-0">
                                <input type="checkbox"  @change="setCurrentTheme" :checked="!isLightTheme">
                                <span class="slider round"></span>
                            </label>
                        </span>
                    </h6>
                </div>
            </div>
            <div @click="logout" class="border-bottom">
                <div class="container py-2">
                    <h6 class="b-6" :class="[isLightTheme ? 'text-black' : 'text-white']">Logout</h6>
                    <p class="text-grey-2 mb-0">Logout from app</p>
                </div>
            </div>
        </div>
        <EditProfile :userDetails="user"></EditProfile>
        
    </div>
</template>

<script>
import EditProfile from '@/components/EditProfile';
import { mapGetters } from 'vuex'
export default {
    asyncData({$axios}) {
        $axios.get('/items')
    },
    components:{
        EditProfile
    },
    methods:{
        logout() {
            this.toast('success', 'Logged out successfully', 'check-circle')
            this.$auth.logout()
            setTimeout(() => {
                this.$router.push('/login')
            }, 1500);
        },
        setCurrentTheme() {
            let check = !this.isLightTheme
            localStorage.setItem('appTheme', JSON.stringify(check));
            this.$store.dispatch('changeTheme', check);
        },
        showModal() {
            this.$store.dispatch('validation/clearErrors')
            this.$bvModal.show('editProfile');
        }
    },
    computed: {
        fullName() {
            return this.user.profile.last_name + ' ' + this.user.profile.first_name
        },
    }
}
</script>
<style >
    .error-enter-active, .error-leave-active{
        transition: opacity .4s ease-in, transform .5s ease
    }
    .error-enter, .error-leave-to{
        opacity: 0;
        transform: translateY(-30px)
    }
    .error-enter-to, .error-leave{
        opacity: 1;
    }
</style>