<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span class="font-weight-light"><router-link to="/" class="my-name theme--light grey--text text--darken-4">Felipe Flor</router-link></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="hidden-xs-only font-weight-light subheading text-uppercase">Fullstack Web Developer</span>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="(link, index) in NAVIGATION_LINKS"
                       class="mr-2"
                       :key="index"
                       :to="link.route" flat>
                    {{ link.title }}
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-side-icon right class="hidden-md-and-up" @click="expandSideNavigation = !expandSideNavigation"></v-toolbar-side-icon>
        </v-toolbar>

        <v-navigation-drawer
                class="navigation-drawer"
                v-model="expandSideNavigation"
                absolute
                temporary
                app
        >
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://res.cloudinary.com/felipeflor/image/upload/v1553281483/felipe-flor.jpg">
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
    import {Component, Prop, Vue} from 'vue-property-decorator';

    interface NavigationLink {
        route: string;
        title: string;
    }

    @Component
    export default class NavigationBar extends Vue {
        private expandSideNavigation: boolean = false;

        private get NAVIGATION_LINKS(): NavigationLink[] {
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
