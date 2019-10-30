<template>
    <div class="loading-wrapper">
        <div class="loading-wrapper-cell">
            <div class="loading-image"  :class="[isLightTheme ? 'light-app-loading' : 'dark-app-loading']"></div>
            <div class="text">
            </div>
        </div>
        <div class="loading-wrapper-cell">
            <div class="loading-image"  :class="[isLightTheme ? 'light-app-loading' : 'dark-app-loading']"></div>
            <div class="text">
            </div>
        </div>
        <div class="loading-wrapper-cell">
            <div class="loading-image"  :class="[isLightTheme ? 'light-app-loading' : 'dark-app-loading']"></div>
            <div class="text">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>