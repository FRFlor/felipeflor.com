<template>
    <div class="portfolio">
        <v-container>
            <div class="project-card elevation-3" :style="gridAreas">
                <img class="project-image"
                     alt="Screencap of Cat & Mouse app"
                     src="https://camo.githubusercontent.com/cab2013dfd5c75db71fedba72738e41597d848c6/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f66656c697065666c6f722f696d6167652f75706c6f61642f635f7363616c652c685f3435302f76313535323732303438372f312e6a7067">

                <h2 class='project-title display-2 font-weight-thin'>Cat Mouse</h2>

                <p class="project-description">
                    A Path Finding exercise! It explores the traveling salesman problem.
                    This app allows you to create a maze with rewards (milk and mouse), the cat
                    will get all the rewards it can with the least amount of movements.
                </p>

                <v-layout class="skills-container" row wrap>
                    <v-chip outline color="primary">Breadth First Search</v-chip>
                    <v-chip outline color="primary">Vue</v-chip>
                    <v-chip outline color="primary">Typescript</v-chip>
                    <v-chip outline color="primary">Mocha</v-chip>
                    <v-chip outline color="primary">Vue Test Utils</v-chip>
                </v-layout>

                <v-layout class="links-container" row wrap>
                    <v-btn class="primary" small>Visit Website</v-btn>
                    <v-btn class="secondary" small>See Source Code</v-btn>
                </v-layout>
            </div>
        </v-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Portfolio extends Vue {

        get gridAreas() {
            if (this.$vuetify.breakpoint.xsOnly) {
                return {'grid-template-areas': "\"title\" \"image\" \"description\" \"skills\" \"links\""}
            }

            return {'grid-template-areas': "\"image title\" \"image description\" \"image skills\" \"image links\""};
        }
    }
</script>

<style lang="scss" scoped>
    .project-card {
        display: grid;
        grid-gap: 20px;
        border: cadetblue 1px solid;
        border-radius: 20px;
        padding: 20px;

        .project-image {
            height: 200px;
            width: auto;
            grid-area: image;
            justify-self: center;
            align-self: center;
        }

        .project-title {
            grid-area: title;
            justify-self: center;
        }

        .project-description {
            grid-area: description;
            justify-self: center;
        }

        .skills-container {
            grid-area: skills;
            justify-self: center;
        }

        .links-container {
            grid-area: links;
            justify-self: center;
        }
    }
</style>
