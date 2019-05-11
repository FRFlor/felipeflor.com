<template>
    <div class="project-card elevation-3">
        <div class="project-image">
            <media-square :src-main="data.media.mainSource"
                          :src-placeholder="data.media.placeHolderSource"
                          :alt="data.media.alt"
                          @click="window.open(imageDestination, '_blank')"/>
        </div>

        <h2 class='project-title headline font-weight-thin' v-text="data.title"></h2>

        <div class="project-description" v-html="data.description">
        </div>

        <v-layout class="keywords-container" row wrap align-center justify-center>
            <v-chip v-for="(keyword, i) in data.keywords"
                    :key="i"
                    tabindex="-1"
                    color="primary"
                    outline>{{keyword}}
            </v-chip>
        </v-layout>

        <v-layout class="links-container" row wrap align-center justify-center>
            <v-btn class="light-button"
                   v-if="data.website"
                   :href="data.website"
                   target="_blank" small>Visit Website</v-btn>
            <v-btn class="secondary dark-button"
                   v-if="data.source"
                   :href="data.source"
                   target="_blank" small>See Source Code
            </v-btn>
        </v-layout>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'nuxt-property-decorator';
    import MediaSquare from "~/components/MediaSquare.vue";
    import {Media} from '~/types/index';

    export interface PortfolioCardData {
        media: Media,
        title: string;
        description: string;
        keywords: string[];
        website?: string;
        source?: string;
    }

    @Component({
        components: {MediaSquare}
    })
    export default class PortfolioCard extends Vue {
        @Prop() private data!: PortfolioCardData;

        protected get window() {
            return window;
        }

        protected get imageDestination() {
            return this.data.website ? this.data.website : this.data.source;
        }
    }
</script>

<style lang="scss" scoped>
    .project-card {
        display: grid;
        grid-gap: 20px;
        grid-template-areas: "image" "title" "description" "skills" "links";
        grid-template-rows: 250px 35px;
        border: lightskyblue 1px solid;
        border-radius: 20px;
        padding: 20px;
        width: 35rem;

        & /deep/ img, video {
            height: 250px;
        }

        .project-image {
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
