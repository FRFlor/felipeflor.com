<template>
    <h1 class="header">Home</h1>
</template>

<script lang="ts">
    import {Component, Vue} from "nuxt-property-decorator"
    import NavigationBar from "~/components/NavigationBar.vue";

    @Component({
        components: {NavigationBar}
    })
    export default class extends Vue {
    }
</script>
