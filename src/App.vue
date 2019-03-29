<template>
    <v-app>
        <navigation-bar></navigation-bar>
        <v-content class="app-content">
            <transition name="slide" mode="out-in">
                <router-view/>
            </transition>
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

<style lang="scss" scoped>
    .app-content {
        overflow-x: hidden;
    }
    .slide-leave-active, .slide-enter-active {
        transition: 0.35s;
    }

    .slide-enter {
        transform: translate(100%, 0);
    }

    .slide-leave-to {
        transform: translate(-100%, 0);
    }
</style>
