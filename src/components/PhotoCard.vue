<template>
    <div class="blog-card" :class="{'alt': hasImageToTheRight}">
        <div class="meta">
            <div class="photo"
                 :style="injectedBackground"></div>
            <div class="picture-hover-container" v-if="hasHoverSlot">
                <slot name="hoverMessage">
                    Placeholder for HoverMessage
                </slot>
            </div>
        </div>
        <div class="description">
            <h2 v-text="title"></h2>
            <h3 v-text="subtitle"></h3>
            <div class="message-container">
                <slot name="message">
                    Placeholder for Message
                </slot>
            </div>
            <p class="read-more" v-if="false">
                <a href="#">Read More</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    // Built on top of Chyno Deluxe's CSS Blog Card.
    // See source here: https://codepen.io/ChynoDeluxe/pen/bdXeqQ/

    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({})
    export default class PhotoCard extends Vue {
            @Prop({default: 'https://via.placeholder.com/250'}) private photo!: string;
            @Prop({default: 'Title'}) private title!: string;
            @Prop({default: 'Subtitle'}) private subtitle!: string;
            @Prop({default: false}) private hasHoverSlot!: boolean;
            @Prop({default: false}) private hasImageToTheRight!: boolean;

            private get injectedBackground(): string {
                return `background-image: url(${this.photo})`;
            }
        }
</script>

<style lang="scss" scoped>
    @import "../scss/_variables.scss";

    body {
        background: #f1f1f1;
        margin: 2rem;
    }

    $color_white: #fff;
    $color_prime: $colorC;
    $color_grey: #e2e2e2;
    $color_grey_dark: #a2a2a2;

    .blog-card {
        display: flex;
        flex-direction: column;
        box-shadow: 0 3px 7px -1px rgba(#000, .1);
        margin: 1rem auto 1.6%;
        background: $color_white;
        line-height: 1.4;
        font-family: sans-serif;
        border-radius: 5px;
        overflow: hidden;
        z-index: 0;
        a {
            color: inherit;
            &:hover {
                color: $color_prime;
            }
        }
        &:hover {
            .photo {
                transform: scale(1.3) rotate(3deg);
            }
        }
        .meta {
            position: relative;
            z-index: 0;
            height: 200px;
        }
        .photo {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-size: cover;
            background-position: center;
            transition: transform .2s;
        }

        .picture-hover-container {
            position: absolute;
            top: 0;
            bottom: 0;
            left: -100%;
            margin: auto;
            transition: left .2s;
            background: rgba(#000, .6);
            color: $color_white;
            padding: 10px;
            width: 100%;
            font-size: .9rem;
            a {
                text-decoration: dotted underline
            }
        }
        .description {
            padding: 1rem;
            background: $color_white;
            position: relative;
            z-index: 1;
            h2, h3 {
                font-family: Poppins, sans-serif;
            }
            h2 {
                line-height: 1;
                margin: 0;
                font-size: 1.7rem;
            }
            h3 {
                position: relative;
                font-size: 1rem;
                font-weight: 300;
                text-transform: uppercase;
                color: $color_grey_dark;
                margin-top: 5px;
                margin-bottom: 1.25rem;
                &:after {
                    content: "";
                    position: absolute;
                    height: 5px;
                    background: $color_prime;
                    width: 35px;
                    bottom: -0.75rem;
                    left: 0;
                    border-radius: 3px;
                }
            }
            .read-more {
                text-align: right;
                a {
                    color: $color_prime;
                    display: inline-block;
                    position: relative;
                }
            }
        }
        .message-container {
            position: relative;
            margin: 1rem 0 0;
        }
        &:hover {
            .picture-hover-container {
                left: 0;
            }
        }


        @media (min-width: 640px) {
            flex-direction: row;
            max-width: 700px;
            .meta {
                flex-basis: 40%;
                height: auto;
            }
            .description {
                flex-basis: 60%;
                &:before {
                    transform: skewX(-3deg);
                    content: "";
                    background: #fff;
                    width: 30px;
                    position: absolute;
                    left: -10px;
                    top: 0;
                    bottom: 0;
                    z-index: -1;
                }
            }
            &.alt {
                flex-direction: row-reverse;
                .description {
                    &:before {
                        left: inherit;
                        right: -10px;
                        transform: skew(3deg)
                    }
                }
                .picture-hover-container {
                    padding-left: 25px;
                }
            }
        }
    }
</style>
