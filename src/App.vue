<template>
    <v-app>
        <navigation-bar></navigation-bar>
        <v-content>
            <router-view/>
        </v-content>
        <app-footer/>
    </v-app>
</template>

<script>
    import NavigationBar from './components/NavigationBar';
    import AppFooter from './components/AppFooter';

    export default {
        name: 'App',
        components: {AppFooter, NavigationBar},
    };
</script>
