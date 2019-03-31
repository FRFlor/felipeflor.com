<template>
    <v-app>
        <navigation-bar></navigation-bar>
        <v-content>
            <nuxt/>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import NavigationBar from "~/components/NavigationBar.vue";

    export default {
        components: {NavigationBar}
    }
</script>
