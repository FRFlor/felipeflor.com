<template>
  <div class="project-card elevation-3">
    <v-hover>
      <lazy-media
        slot-scope="{ hover }"
        :src-main="data.media.mainSource"
        :src-placeholder="data.media.placeHolderSource"
        :alt="data.media.alt"
        class="project-image"
        :class="{'elevation-5 bigger' : hover}"
        @click="window.open(imageDestination, '_blank')"
      />
    </v-hover>

    <h2 class="project-title headline font-weight-thin" v-text="data.title" />

    <div class="project-description" v-html="data.description" />

    <v-layout class="keywords-container" row wrap align-center justify-center>
      <v-chip
        v-for="(keyword, i) in data.keywords"
        :key="i"
        tabindex="-1"
        color="primary"
        outline
      >
        {{ keyword }}
      </v-chip>
    </v-layout>

    <v-layout class="links-container" row wrap align-center justify-center>
      <v-btn
        v-if="data.website"
        class="light-button"
        :href="data.website"
        target="_blank"
        small
      >
        Visit Website
      </v-btn>
      <v-btn
        v-if="data.source"
        class="secondary dark-button"
        :href="data.source"
        target="_blank"
        small
      >
        See Source Code
      </v-btn>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Media } from '../types/index'
import LazyMedia from './LazyMedia.vue'

export interface PortfolioCardData {
        media: Media,
        title: string;
        description: string;
        keywords: string[];
        website?: string;
        source?: string;
    }

    @Component({
      components: { LazyMedia }
    })
export default class PortfolioCard extends Vue {
        @Prop() private data!: PortfolioCardData;

        protected get window() {
          return window
        }

        protected get imageDestination() {
          return this.data.website ? this.data.website : this.data.source
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
            max-width: 100%;
        }

        .project-image {
            grid-area: image;
            justify-self: center;
            outline: hsla(203, 72%, 35%, 0.4) 2px solid;
            transition: all 350ms ease;
            &.bigger {
                transform: scale(1.025);
            }
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
