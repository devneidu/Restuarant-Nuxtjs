<template>
    <div class="container">
        <div class="mt-3 text-center">
            <div><img src="/logo.png" alt="" width="70" height=""></div>
            <h5 class="b-7 mt-5">LOGIN TO ACCOUNT</h5>
        </div>

        <div class="mt-5">
            <form>
                <div class="form-group">
                    <label class="b-6">Email Address</label>
                    <input type="text" class="form-control br-0">
                </div>
                <div class="form-group">
                    <label class="b-6">Password</label>
                    <input type="password" class="form-control br-0">
                </div>
                <div class="form-group">
                    <button class="btn btn-block br-0 bg-orange text-white b-7">LOGIN</button>
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
    layout: 'auth'
}
</script>