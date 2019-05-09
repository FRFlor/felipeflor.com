<template>
    <div class="media-square"
         @click="$emit('click')">
        <v-hover>
            <video v-if="isVideo"
                   :class="{'elevation-5 bigger' : hover}"
                   slot-scope="{ hover }"
                   autoplay muted loop playsinline>
                <source :src="src"
                        type="video/webm">
            </video>

            <img v-else
                 :class="{'elevation-5 bigger' : hover}"
                 slot-scope="{ hover }"
                 :alt="alt"
                 :src="src">
        </v-hover>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'nuxt-property-decorator';

    @Component
    export default class MediaSquare extends Vue {
        @Prop() protected src!: string;
        @Prop() protected lazySrc!: string;
        @Prop() protected alt!: string;

        protected get isVideo(): boolean {
            return this.src.endsWith('webm');
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
