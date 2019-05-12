<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title>
                <h1 class="headline font-weight-light">Felipe Flor</h1>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon :tabindex="isSmallScreen ? '0' : '-1'"
                                 class="hidden-sm-and-up light-button"
                                 @click="expandSideNavigation = !expandSideNavigation"
                                 right/>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn v-for="(link, index) in NAVIGATION_LINKS"
                       class="mr-2"
                       :class="$route.path === link.route ? 'current-route': 'light-button'"
                       :tabindex="$route.path === link.route || isSmallScreen ? '-1' : '0'"
                       :key="index"
                       :to="link.route"
                       flat>
                    {{ link.title }}
                </v-btn>
            </v-toolbar-items>
            <section class="hidden-xs-only ml-5">
                <v-btn v-for="socialMediaLink in SOCIALMEDIA_LINKS"
                       :tabindex="isSmallScreen ? '-1' : '0'"
                       :aria-label="socialMediaLink.text"
                       :key="socialMediaLink.icon"
                       :href="socialMediaLink.destination"
                       target="_blank"
                       class="grey--text text--darken-4 light-button"
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
                        <img :src="MediaCollection.felipeAvatar.mainSource"
                             :alt="MediaCollection.felipeAvatar.alt">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>Felipe Flor</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile v-for="(link, index) in NAVIGATION_LINKS"
                             :key="index">
                    <v-list-tile-content>
                        <v-btn :to="link.route"
                               :class="$route.path === link.route ? 'current-route': 'light-button'"
                               :tabindex="$route.path === link.route || isSidebarHidden ? '-1' : '0'"
                               flat block round>
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
    import {ALL_LINKS, Link, LinkType} from '~/assets/js/links';
    import {MediaCollection} from '~/store/MediaCollection';

    interface NavigationLink {
        route: string;
        title: string;
    }

    @Component
    export default class NavigationBar extends Vue {
        protected expandSideNavigation: boolean = false;
        protected MediaCollection: MediaCollection = MediaCollection;

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

        protected get isSidebarHidden(): boolean {
            return !this.expandSideNavigation;
        }

        protected get isSmallScreen(): boolean {
            // @ts-ignore
            return this.$vuetify.breakpoint.xsOnly;
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

    .current-route {
        background-color: hsl(0, 0%, 20%);
        color: hsl(0, 0%, 90%);
    }
</style>
