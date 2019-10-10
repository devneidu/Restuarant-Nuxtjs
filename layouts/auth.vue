<template>
    <div class="app-wrapper">
        <div class="light-app-body">
            <div class="content">
                <nuxt/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['guest']
}
</script>
<style>
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