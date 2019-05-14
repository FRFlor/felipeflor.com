<template>
  <v-app>
    <navigation-bar />
    <v-content>
      <nuxt />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '../components/AppFooter'
import NavigationBar from '../components/NavigationBar'

export default {
  components: { AppFooter, NavigationBar },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
