<template>
    <div class="container">
        <div class="mt-3 text-center">
            <div><img src="/logo.png" alt="" width="70" height=""></div>
            <h5 class="b-7 mt-5">CREATE NEW ACCOUNT</h5>
        </div>

        <div class="mt-5">
            <form>
                <div class="form-group">
                    <label class="b-6 ">First Name</label>
                    <input type="text" class="form-control br-0">
                </div>
                <div class="form-group">
                    <label class="b-6 ">Last Name</label>
                    <input type="text" class="form-control br-0">
                </div>
                <div class="form-group">
                    <label class="b-6 ">Other Name</label>
                    <input type="text" class="form-control br-0">
                </div>
                <div class="form-group">
                    <div>
                        <label class="b-6 ">Gender</label>
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
                    <label class="b-6 ">Email Address</label>
                    <input type="email" class="form-control br-0">
                </div>
                <div class="form-group">
                    <label class="b-6 ">Password</label>
                    <input type="password" class="form-control br-0">
                </div>
                <div class="form-group">
                    <label class="b-6 ">Address</label>
                    <input type="text" class="form-control br-0">
                </div>
                <div class="form-group">
                    <button class="btn btn-block br-0 bg-orange text-white b-7">REGISTER</button>
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
    layout: 'auth'
}
</script>