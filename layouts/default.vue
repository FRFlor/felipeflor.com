<template>
    <v-app>
        <navigation-bar/>
        <v-content>
            <nuxt/>
        </v-content>
        <app-footer/>
    </v-app>
</template>

<script lang="ts">
    import NavigationBar from "~/components/NavigationBar.vue";
    import AppFooter from "~/components/AppFooter.vue";

    export default {
        components: {AppFooter, NavigationBar}
    }
</script>

<style lang="scss">
    .app-content {
        overflow-x: hidden;
    }
</style>
