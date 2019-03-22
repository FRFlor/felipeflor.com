<template>
    <v-app>
        <navigation-bar></navigation-bar>
        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import NavigationBar from './components/NavigationBar';

    export default {
        name: 'App',
        components: {NavigationBar},
    };
</script>
