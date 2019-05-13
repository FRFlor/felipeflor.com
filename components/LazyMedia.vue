<template>
    <no-ssr>
        <div class="media-square"
             @click="$emit('click')">

            <div class="trigger-loading-area"
                 aria-hidden="true"
                 v-observe-visibility="{callback: visibilityChanged, once: true}">
            </div>

            <v-lazy-image v-if="!isVideo"
                          :alt="alt"
                          :src-placeholder="srcPlaceholder"
                          :src="srcMain"/>

            <div v-if="shouldRender">
                <video v-if="shouldRender && isVideo"
                       :poster="srcPlaceholder"
                       autoplay muted loop playsinline>
                    <source :src="srcMain"
                            type="video/webm">
                </video>
            </div>
        </div>
    </no-ssr>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'nuxt-property-decorator';
    import VLazyImage from "v-lazy-image";

    @Component({components: {VLazyImage}})
    export default class LazyMedia extends Vue {
        @Prop() protected srcMain!: string;
        @Prop() protected srcPlaceholder!: string;
        @Prop() protected alt!: string;

        protected shouldRender: boolean = false;

        protected visibilityChanged(isVisible: boolean): void {
            this.shouldRender = isVisible;
        }

        protected get isVideo(): boolean {
            return this.srcMain.endsWith('webm');
        }
    }
</script>

<style lang="scss" scoped>
    img, video {
        max-width: 100%;
    }

    .trigger-loading-area {
        position: absolute;
        background-color: hsla(0, 100%, 50%, 0);
        pointer-events: none;
        height: calc(100% + 300px);
        width: calc(100% + 300px);
        max-width: 100vw;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
    }

    .media-square {
        position: relative;

        &:hover {
            cursor: pointer;
        }
    }
</style>
