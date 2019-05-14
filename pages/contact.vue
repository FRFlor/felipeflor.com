<template>
  <v-container class="contact" justify-center>
    <v-layout column class="my-5">
      <h2 class="display-2 font-weight-thin mb-5">
        Contact me
      </h2>

      <v-flex v-for="(link, index) in contactLinks" :key="index">
        <v-btn
          icon
          class="ml-5 light-button"
          color="blue-grey"
          :aria-label="link.text"
          :href="link.destination"
          outline
        >
          <v-icon>{{ link.icon }}</v-icon>
        </v-btn>
        <a
          class="text-link ml-2"
          target="_blank"
          tabindex="-1"
          :href="link.destination"
          v-text="link.text ? link.text : link.destination"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { LINKS as ALL_LINKS, Link, LinkType } from '../store/Links'

    // @ts-ignore
    @Component({ transition: (_, from) => (!from || from.name === 'portfolio') ? 'slide-left' : 'slide-right' })
export default class ContactPage extends Vue {
  protected get contactLinks(): Link[] {
    return [
      this.firstLinkByType(LinkType.Email),
      this.firstLinkByType(LinkType.GitHub),
      this.firstLinkByType(LinkType.Twitter),
      this.firstLinkByType(LinkType.LinkedIn)
    ]
  }

  protected firstLinkByType(type: LinkType): Link {
    const result: Link | undefined = ALL_LINKS.find((link: Link) => link.type === type)
    if (result === undefined) {
      throw new DOMException(`No links of type ${type} found.`)
    }

    return result
  }
};
</script>

<style scoped lang="scss">
    $_blue-grey: #607D8B;
    .contact {
        .text-link {
            text-decoration: none;
            color: $_blue-grey;
            &:hover {
                text-decoration: underline;
                color: hsl(200, 68%, 46%);
            }
        }
    }

</style>
