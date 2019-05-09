<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title>
                <span class="font-weight-light">
                    <nuxt-link to="/" class="my-name theme--light grey--text text--darken-4">
                        <h1 class="headline font-weight-light">Felipe Flor</h1>
                    </nuxt-link>
                </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn v-for="(link, index) in NAVIGATION_LINKS"
                       class="mr-2"
                       :key="index"
                       :to="link.route" flat>
                    {{ link.title }}
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-side-icon right class="hidden-sm-and-up"
                                 @click="expandSideNavigation = !expandSideNavigation"/>
            <section aria-describedby="social-media" class="hidden-xs-only ml-5">
                <v-btn v-for="socialMediaLink in SOCIALMEDIA_LINKS"
                       :key="socialMediaLink.icon"
                       :href="socialMediaLink.destination"
                       target="_blank"
                       class="grey--text text--darken-4"
                       icon>
                    <v-icon size="24px">{{ socialMediaLink.icon }}</v-icon>
                </v-btn>
            </section>
        </v-toolbar>

        <v-navigation-drawer
                class="navigation-drawer"
                v-model="expandSideNavigation"
                temporary
                app
        >
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://res.cloudinary.com/felipeflor/image/upload/e_improve/v1553281483/felipe-flor.jpg"
                             alt="Felipe Rendeiro Flor Avatar">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>Felipe Flor</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile
                        v-for="(link, index) in NAVIGATION_LINKS"
                        :key="index">
                    <v-list-tile-content>
                        <v-btn :to="link.route" flat block round>
                            {{ link.title }}
                        </v-btn>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator';
    import {ALL_LINKS, Link, LinkType} from '~/assets/js/constants';

    interface NavigationLink {
        route: string;
        title: string;
    }


    @Component
    export default class NavigationBar extends Vue {
        protected expandSideNavigation: boolean = false;

        protected get NAVIGATION_LINKS(): NavigationLink[] {
            return [
                {
                    route: '/',
                    title: 'Home',
                },
                {
                    route: '/portfolio',
                    title: 'Portfolio',
                },
                {
                    route: '/contact',
                    title: 'Contact',
                },
            ];
        }

        protected get SOCIALMEDIA_LINKS(): Link[] {
            return ALL_LINKS.filter((link: Link) => {
                return [LinkType.GitHub, LinkType.LinkedIn].includes(link.type);
            });
        }
    }
</script>

<style scoped lang="scss">
    .my-name {
        text-decoration: none;
    }

    .navigation-drawer {
        max-width: 15rem;
    }
</style>
