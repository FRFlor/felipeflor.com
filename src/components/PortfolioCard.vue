<template>
    <div class="project-card elevation-3" :style="gridAreas">
        <img class="project-image"
             :alt="data.imageAlt"
             :src="data.imageSrc">

        <h2 class='project-title display-2 font-weight-thin' v-text="data.title"></h2>

        <p class="project-description" v-text="data.description">
        </p>

        <v-layout class="skills-container" row wrap>
            <v-chip outline color="primary" v-for="(skill, i) in data.skills" :key="i">{{skill}}</v-chip>
        </v-layout>

        <v-layout class="links-container" row wrap>
            <v-btn class="primary" small>Visit Website</v-btn>
            <v-btn class="secondary" small>See Source Code</v-btn>
        </v-layout>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    export interface PortfolioCardData {
        imageSrc: string;
        imageAlt: string;
        title: string;
        description: string;
        skills: string[];
        website?: string;
        source?: string;
    }

    @Component
    export default class PortfolioCard extends Vue {
        @Prop() data!: PortfolioCardData;

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
