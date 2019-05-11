<template>
    <no-ssr>
        <div class="media-square"
             @click="$emit('click')"
             v-observe-visibility="{
             callback: visibilityChanged,
             once: true,
         }">
            <v-hover v-if="shouldRender">
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
    </no-ssr>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'nuxt-property-decorator';
    import VLazyImage from "v-lazy-image";

    @Component({components: {VLazyImage}})
    export default class MediaSquare extends Vue {
        @Prop() protected srcMain!: string;
        @Prop() protected alt!: string;
        @Prop() protected srcPlaceholder!: string;

        protected shouldRender: boolean = false;

        protected visibilityChanged(isVisible: boolean): void {
            this.shouldRender = isVisible;
        }

        protected get isVideo(): boolean {
            return this.srcMain.endsWith('webm');
        }

        protected get nameWithoutExtension(): string {
            return this.srcMain.replace(/\.[^/.]+$/, '');
        }

        protected get cloudinaryRoot(): string {
            const mediaType: string = this.isVideo ? 'video' : 'image';
            return `https://res.cloudinary.com/felipeflor/${mediaType}/upload`;
        }

        protected get placeholder(): string {
            if (this.srcPlaceholder) {
                return `https://res.cloudinary.com/felipeflor/image/upload/f_auto,q_auto/v1556653952/felipeflor.com/${this.srcPlaceholder}`;
            }

            return `https://res.cloudinary.com/felipeflor/image/upload/e_blur:200,q_20/v1556653952/felipeflor.com/${this.nameWithoutExtension}.webp`;
        }

        protected get fullSize(): string {
            if (this.isVideo) {
                return `${this.cloudinaryRoot}/v1556653952/felipeflor.com/${this.srcMain}`;
            }
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
