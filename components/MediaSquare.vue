<template>
    <div class="media-square"
         @click="$emit('click')">
        <v-hover>
            <video v-if="isVideo"
                   :poster="placeholder"
                   :class="{'elevation-5 bigger' : hover}"
                   slot-scope="{ hover }"
                   autoplay muted loop playsinline>
                <source :src="fullSize"
                        type="video/webm">
            </video>

            <v-lazy-image v-else
                          :class="{'elevation-5 bigger' : hover}"
                          slot-scope="{ hover }"
                          :alt="alt"
                          :src-placeholder="placeholder"
                          :src="fullSize"/>
        </v-hover>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'nuxt-property-decorator';
    import VLazyImage from "v-lazy-image";

    @Component({components: {VLazyImage}})
    export default class MediaSquare extends Vue {
        @Prop() protected srcName!: string;
        @Prop() protected alt!: string;

        protected get isVideo(): boolean {
            return this.srcName.endsWith('webm');
        }

        protected get nameWithoutExtension(): string {
            return this.srcName.replace(/\.[^/.]+$/, '');
        }

        protected get cloudinaryRoot(): string {
            const mediaType: string = this.isVideo ? 'video' : 'image';
            return `https://res.cloudinary.com/felipeflor/${mediaType}/upload`;
        }

        protected get placeholder(): string {
            return `${this.cloudinaryRoot}/e_blur:200,q_20/v1556653952/felipeflor.com/${this.nameWithoutExtension}.webp`;
        }

        protected get fullSize(): string {
            return `${this.cloudinaryRoot}/f_auto,q_auto/v1556653952/felipeflor.com/${this.nameWithoutExtension}`;
        }
    }
</script>

<style lang="scss" scoped>
    img, video {
        max-width: 100%;
        outline: hsla(203, 72%, 35%, 0.4) 2px solid;
        transition: all 350ms ease;
    }

    .media-square {
        &:hover {
            cursor: pointer;
        }

        .bigger {
            transform: scale(1.025);
        }
    }
</style>
