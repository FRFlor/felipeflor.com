import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'universal',

  /*
        ** Headers of the page
        */
  head: {
    title: 'Felipe Flor - WebDeveloper - Vue, Laravel and Typescript',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'I am Felipe Flor, a FullStack WebDeveloper from Ontario - Canada, mostly experienced with ' +
                    'Vue, Laravel and Typescript. This website contains my personal Portfolio and contact information,' +
                    ' come take a look!'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.felipeflor.com/' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
        integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
        ** Customize the progress-bar color
        */
  loading: { color: '#fff' },

  /*
        ** Global CSS
        */
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/transitions.scss',
    '~/assets/style/accessibility.scss'
  ],

  /*
        ** Plugins to load before mounting the App
        */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/vue-observe-visibility'
  ],

  polyfill: {
    features: [
      {
        require: 'intersection-observer',
        // Detect causes the polyfill not to load if not necessary
        detect: () => 'IntersectionObserver' in window
      }
    ]
  },

  /*
      ** Nuxt.js modules
      */
  modules: ['nuxt-polyfill'],

  router: {
    scrollBehavior(to, from, savedPosition) {
      setTimeout(() => window.scroll(0, 0), 350)
    }
  },

  /*
        ** Build configuration
        */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
                ** You can extend webpack config here
                */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // @ts-ignore
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default config
