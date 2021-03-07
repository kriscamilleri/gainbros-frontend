export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gainbros-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/guide/setup/
    '@nuxtjs/auth-next',
  ],

  router: {
    middleware: ['auth']
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3000/',
    credentials: true,
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/auth/': 'http://localhost:3000'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'message',
          autoFetch: true
        },
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          },
          signup: {
            url: '/auth/signup',
            method: 'post'
          },
          user: {
            url: '/auth/user',
            method: 'get',
            propertyName: 'token'
          }
        },
        tokenRequired: true,
        tokenType: true
      }
    },
    redirect: {
      logout: '/logout',
      callback: '/login',
      home: '/'
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
