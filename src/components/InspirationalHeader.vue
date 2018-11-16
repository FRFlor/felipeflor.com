<template>
    <header class="site-header"
            :style="injectedShadedBackground">
        <div class="text-container">
            <div class="large-header-text" v-text="message">
            </div>
            <div class="small-header-text">
                Full Stack Developer at Vehikl
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import {Support} from '../js/support';
    import {Component, Prop, Vue} from 'vue-property-decorator';

    interface Image {
        rootUrl: string;
        endUrl: string;
        size: ImageSize;
    }

    interface ImageSize {
        height: number;
        width: number;
    }

    @Component({})
    export default class InspirationalHeader extends Vue {
            @Prop({default: 'Lorem ipsum dolor sit amet'}) private message!: string;

            private backgroundImage: Image = {
                rootUrl: 'https://res.cloudinary.com/felipeflor/image/upload',
                endUrl: 'v1541705896/computer.jpg',
                size: {
                    height: 674,
                    width: 1920,
                },
            };

            private get backgroundImageEffectiveSize(): ImageSize {
                const img: Image = this.backgroundImage;
                const scalingFactor: number = Support.getImageIdealScale(img.size.height, img.size.width);

                return {
                    height: Math.floor(img.size.height * scalingFactor),
                    width: Math.floor(img.size.width * scalingFactor),
                };
            }

            private get backgroundImageUrl(): string {
                const src: Image = this.backgroundImage;
                const newSize: ImageSize = this.backgroundImageEffectiveSize;

                return `${src.rootUrl}/c_scale,f_auto,q_auto,h_${newSize.height},w_${newSize.width}/${src.endUrl}`;
            }

            private get injectedShadedBackground(): object {
                const gradient: string = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';

                return {backgroundImage: `${gradient}, url(${this.backgroundImageUrl})`};
            }
        }
</script>

<style lang="scss" scoped>
    .text-container{
        padding-top: 50px;
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .site-header{
        height: 50vw;
        background-position-y: bottom;
        background-size: 960px 337px;
        box-shadow: 3px 3px 5px 6px #212121;
        margin-bottom: 15px;
        .large-header-text{
            font-size: 5vw;
            display:flex;
            flex-direction: column;
            align-items: center;
        }

        .small-header-text{
            font-size: 3.5vw;
            margin-top: 20px;
            display:flex;
            flex-direction: column;
            align-items: center;
        }
    }
    @media only screen and (min-width: 450px) {
        .site-header{
            height: 225px;
        }
    }

    @media only screen and (min-width: 768px) {
        .site-header{
            background-size: 1920px 674px;
            height: 300px;
        }

        .large-header-text{
            font-size: 2.3rem !important;
        }

        .small-header-text{
            font-size: 1.3rem !important;
        }
    }

    @media only screen and (min-width: 1440px) {
        .site-header{
            background-size: 100vw 35vw;
            height: 400px;
        }

        .large-header-text{
            font-size: 2.6rem !important;
        }

        .small-header-text{
            font-size: 1.5rem !important;
        }
    }
</style>
