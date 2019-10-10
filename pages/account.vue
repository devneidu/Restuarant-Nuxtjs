<template>
    <div :class="[isLightTheme ? 'light-app-body' : 'dark-app-body']">
        <div class="content">
            <div class="container">
                <div class="d-flex justify-content-end">
                    <i class="fa fa-pen t-20 mr-3 text-info" data-toggle="modal" data-target="#myModal"></i>
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
                                <input type="checkbox"  @change="setCurrentTheme" :checked="!checked">
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
        <div class="modal fade pr-0" id="myModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-dark-green text-white">
                        <h4 class="modal-title">Edit Profile</h4>
                    </div>
            
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="" class="t-14 b-7">Name</label>
                                <input type="text" name="name" class="form-control br-0">
                            </div>
                            <div class="form-group">
                                <label for="" class="t-14 b-7">Email</label>
                                <input type="email" name="email" class="form-control br-0">
                            </div>
                            <div class="form-group">
                                <div>
                                    <label for="" class="t-14 b-7">Gender</label>
                                </div>
                                <label class="radio-container">Male
                                    <input type="radio" checked="checked" name="gender">
                                    <span class="radiomark"></span>
                                </label>
                                <label class="radio-container">Female
                                    <input type="radio" name="gender">
                                    <span class="radiomark"></span>
                                </label>
                            </div>
                            <div class="form-group">
                                <label for="" class="t-14 b-7">Address</label>
                                <input type="text" name="address" class="form-control br-0">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger br-0" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary br-0" >Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            lightTheme: true
        }
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
            this.lightTheme = !this.lightTheme
            localStorage.setItem('appTheme', JSON.stringify(this.lightTheme));
            this.$store.dispatch('changeTheme', this.lightTheme);
        }
    },
    computed: {
        fullName() {
            return this.user.profile.last_name + ' ' + this.user.profile.first_name
        },
        ...mapGetters({
            checked: 'isLightTheme'
        })
    }
}
</script>