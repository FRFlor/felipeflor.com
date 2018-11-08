<template>
    <div id="app">
        <navigation-bar/>
        <inspirational-header/>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import NavigationBar from '@/components/NavigationBar';
    import InspirationalHeader from '@/components/InspirationalHeader';

    export default {
        components: {NavigationBar, InspirationalHeader},
    };
</script>

<style lang="scss">
    @import "~animate.css/animate.min.css";
    @import "./scss/app.scss";
</style>
