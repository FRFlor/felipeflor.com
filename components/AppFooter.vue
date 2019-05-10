<template>
    <v-footer class="grey darken-3"
              inset dark app>
        <v-spacer></v-spacer>
        <v-btn class="grey darken-3 mr-5 elevation-0"
               v-show="$vuetify.breakpoint.smAndUp"
               href="https://www.felipeflor.com"
               target="_blank"
               round>Felipe Flor
        </v-btn>
        <v-btn v-for="link in links"
               :aria-label="link.text"
               :key="link.icon"
               :href="link.destination"
               target="_blank"
               class="white--text"
               icon>
            <v-icon size="24px">{{ link.icon }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
    </v-footer>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator';
    import {ALL_LINKS, Link, LinkType} from '~/assets/js/constants';

    @Component
    export default class AppFooter extends Vue {
        protected get links(): Link[] {
            return ALL_LINKS.filter((link: Link) => {
                return link.type !== LinkType.PersonalWebsite;
            });
        }

        protected get shouldShowNameOnFooter(): boolean {
            try {
                // @ts-ignore
                return this.$vuetify.breakpoint.smAndUp
            } catch (e) {
                return false;
            }
        }
    }
</script>
