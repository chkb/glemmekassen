import colors from 'vuetify/es5/util/colors'

// ajouter seulement `router.base = '/Spaceship/'` si `DEPLOY_ENV` est `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/Spaceship/',
        },
      }
    : {}

export default {
  // ssr:true
  ssr: false,
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Spaceship',
    title: 'Spaceship',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org
    '@nuxtjs/firebase',
  ],

  ...routerBase,

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  /*
   ** Nuxt Firebase configuration
   ** https://firebase.nuxtjs.org/
   */
  firebase: {
    config: {
      apiKey: "AIzaSyA615e_SQM6WgIKSfKUzmi0zDUSnicpdHc",
      authDomain: "glemmekassen-9a14b.firebaseapp.com",
      projectId: "glemmekassen-9a14b",
      storageBucket: "glemmekassen-9a14b.appspot.com",
      messagingSenderId: "573198402993",
      appId: "1:573198402993:web:9415d0352543889736e990",
      measurementId: "G-VCNVXH1N5T"
    },
    services: {
      auth: {
        // Experimental Feature, use with caution.
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChangedMutation',
        },
        ssr: true,
      },
      firestore: true,
    },
  },

  pwa: {
    // disable the modules you don't need
    // meta: false,
    // icon: false,
    // if you omit a module key form configuration sensible defaults will be applied
    // manifest: false,

    workbox: {
      importScripts: [
        // ...
        // ssr:true '/firebase-auth-sw.js',
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: false,
    },
  },
}
