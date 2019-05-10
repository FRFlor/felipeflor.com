<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title>
                <h1 class="headline font-weight-light">Felipe Flor</h1>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <no-ssr>
                <v-toolbar-side-icon v-if="isSmallScreen"
                                     class="hidden-sm-and-up light-button"
                                     @click="expandSideNavigation = !expandSideNavigation"
                                     right/>
                <v-toolbar-items v-if="! isSmallScreen"
                                 class="hidden-xs-only">
                    <v-btn v-for="(link, index) in NAVIGATION_LINKS"
                           class="mr-2 light-button"
                           :class="{'current-route': $route.path === link.route}"
                           :tabindex="$route.path === link.route ? '-1' : '0'"
                           :key="index"
                           :to="link.route"
                           flat>
                        {{ link.title }}
                    </v-btn>
                </v-toolbar-items>
                <section v-if="! isSmallScreen"
                         class="hidden-xs-only ml-5">
                    <v-btn v-for="socialMediaLink in SOCIALMEDIA_LINKS"
                           :aria-label="socialMediaLink.text"
                           :key="socialMediaLink.icon"
                           :href="socialMediaLink.destination"
                           target="_blank"
                           class="grey--text text--darken-4 light-button"
                           icon>
                        <v-icon size="24px">{{ socialMediaLink.icon }}</v-icon>
                    </v-btn>
                </section>
            </no-ssr>
        </v-toolbar>

        <no-ssr>
            <v-navigation-drawer
                    v-if="isSmallScreen"
                    class="navigation-drawer"
                    v-model="expandSideNavigation"
                    temporary
                    app
            >
                <v-list class="pa-1">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img :src="avatarSrc"
                                 :alt="avatarAlt">
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
                                   class="light-button"
                                   :class="{'current-route': $route.path === link.route}"
                                   :tabindex="$route.path === link.route || isSidebarHidden ? '-1' : '0'"
                                   flat block round>
                                {{ link.title }}
                            </v-btn>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
        </no-ssr>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator';
    import {ALL_LINKS, Link, LinkType} from '~/assets/js/constants';

    interface NavigationLink {
        route: string;
        title: string;
    }

    const CLOUDINARY: string = 'https://res.cloudinary.com/felipeflor/image/upload';

    @Component
    export default class NavigationBar extends Vue {
        protected expandSideNavigation: boolean = false;
        protected avatarSrc: string = `${CLOUDINARY}/f_auto,q_auto,e_improve/v1553281483/felipeflor.com/felipe-flor`;
        protected avatarAlt: string = "Felipe Rendeiro Flor's profile picture";

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
