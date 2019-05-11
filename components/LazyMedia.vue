<template>
    <no-ssr>
        <div class="media-square"
             @click="$emit('click')">

            <div class="trigger-loading-area"
                 aria-hidden="true"
                 v-observe-visibility="{callback: visibilityChanged, once: true}">
            </div>

            <v-hover v-if="shouldRender">
                <video v-if="isVideo"
                       :poster="srcPlaceholder"
                       :class="{'elevation-5 bigger' : hover}"
                       slot-scope="{ hover }"
                       autoplay muted loop playsinline>
                    <source :src="srcMain"
                            type="video/webm">
                </video>

                <v-lazy-image v-else
                              :class="{'elevation-5 bigger' : hover}"
                              slot-scope="{ hover }"
                              :alt="alt"
                              :src-placeholder="srcPlaceholder"
                              :src="srcMain"/>
            </v-hover>
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
    $loadingTriggerPadding: 80px;

    img, video {
        max-width: 100%;
        outline: hsla(203, 72%, 35%, 0.4) 2px solid;
        transition: all 350ms ease;
    }

    .trigger-loading-area {
        position: absolute;
        background-color: hsla(0, 100%, 50%, 0);
        pointer-events: none;
        min-height: 600px;
        min-width: 500px;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
    }

    .media-square {
        position: relative;

        &:hover {
            cursor: pointer;
        }

        .bigger {
            transform: scale(1.025);
        }
    }
</style>
