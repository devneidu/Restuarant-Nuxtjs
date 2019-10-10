
export default {
  mode: 'universal',
  router: {
    middleware: 'ClearErrors'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0BC38F' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/app.css',
    '@/assets/css/style.css',
    '@/assets/css/fontawesome.css'
  ],
  toast: {
    position: 'bottom-center',
    keepOnHover: true,
    duration: 3000,
    fullWidth: true,
    fitToScreen: true,
    iconPack: 'custom-class'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/helpers/axios.js',
    '@/plugins/mixins/toast.js',
    '@/plugins/mixins/getUser.js',
    '@/plugins/mixins/getErrors.js',
    '@/plugins/mixins/appTheme.js',
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'get' },
          user: { url: '/user', method: 'get', propertyName: 'data' }
        }
      }
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/toast'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://foodie.test/api'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
