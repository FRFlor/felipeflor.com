<template>
  <v-footer
    class="grey darken-3"
    inset
    dark
    app
  >
    <v-spacer />
    <v-btn
      class="grey darken-3 mr-5 elevation-0 hidden-xs-only dark-button"
      href="https://www.felipeflor.com"
      target="_blank"
      round
    >
      Felipe Flor
    </v-btn>
    <v-btn
      v-for="link in links"
      :key="link.icon"
      :aria-label="link.text"
      :href="link.destination"
      target="_blank"
      class="white--text dark-button"
      icon
    >
      <v-icon size="24px">
        {{ link.icon }}
      </v-icon>
    </v-btn>
    <v-spacer />
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { LINKS as ALL_LINKS, Link, LinkType } from '../store/Links'

    @Component
export default class AppFooter extends Vue {
  protected get links(): Link[] {
    return ALL_LINKS.filter((link: Link) => {
      return link.type !== LinkType.PersonalWebsite
    })
  }
}
</script>
