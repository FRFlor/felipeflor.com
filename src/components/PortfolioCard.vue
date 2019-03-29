<template>
    <div class="project-card elevation-3" :style="$vuetify.breakpoint.smAndUp ? desktopGridTemplateArea : ''">
        <v-hover>
            <img class="project-image"
                 slot-scope="{ hover }"
                 :class="{'elevation-5 bigger' : hover}"
                 :alt="data.imageAlt"
                 :src="data.imageSrc"
                 @click="window.open(imageDestination, '_blank')"
            >
        </v-hover>

        <h2 class='project-title headline font-weight-thin' v-text="data.title"></h2>

        <div class="project-description" v-html="data.description">
        </div>

        <v-layout class="keywords-container" row wrap align-center justify-center>
            <v-chip outline color="primary" v-for="(keyword, i) in data.keywords" :key="i">{{keyword}}</v-chip>
        </v-layout>

        <v-layout class="links-container" row wrap align-center justify-center>
            <v-btn class="primary" v-if="data.website" :href="data.website" target="_blank" small>Visit Website</v-btn>
            <v-btn class="secondary" v-if="data.source" :href="data.source" target="_blank" small>See Source Code
            </v-btn>
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
        keywords: string[];
        website?: string;
        source?: string;
    }

    @Component
    export default class PortfolioCard extends Vue {
        @Prop() private data!: PortfolioCardData;

        private desktopGridTemplateArea = {
            'grid-template-areas': `"image title"
                                    "image description"
                                    "image skills"
                                    ". links"`,
        };

        get window() {
            return window;
        }

        get imageDestination() {
            return this.data.website ? this.data.website : this.data.source;
        }
    }
</script>

<style lang="scss" scoped>
    .project-card {
        display: grid;
        grid-gap: 20px;
        grid-template-areas: "title" "image" "description" "skills" "links";
        border: cadetblue 1px solid;
        border-radius: 20px;
        padding: 20px;
        max-width: 45rem;

        .project-image {
            transition: all 350ms ease;
            border: gainsboro 1px solid;

            &:hover {
                cursor: pointer;
            }

            &.bigger {
                transform: scale(1.025);
            }

            height: 200px;
            max-width: 225px;
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

        .keywords-container {
            grid-area: skills;
            justify-self: center;
        }

        .links-container {
            grid-area: links;
            justify-self: center;
        }
    }
</style>
