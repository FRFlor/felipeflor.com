<template>
    <div class='home'>
        <v-parallax class='elevation-5'
                    height='300'
                    alt="Mac and Keyboard slightly blurred"
                    src='https://res.cloudinary.com/felipeflor/image/upload/c_crop,g_south_west,h_400,x_0,y_0/v1553539328/computer.jpg'
                    dark>
            <v-layout align-center column justify-center>
                <div class='display-1 font-weight-thin mb-3 text-xs-center'>Full Stack Developer at Vehikl</div>
                <span class='subheading'>"Design. Develop. Deliver."</span>
            </v-layout>
        </v-parallax>

        <v-container>
            <section aria-describedby='Who am I?'>
                <v-layout row wrap>
                    <v-flex xs 12 sm9 offset-sm3>
                        <h2 class='display-2 font-weight-thin my-5'>Who am I?</h2>
                    </v-flex>

                    <v-flex shrink xs12 sm3 align-center
                            :class="$vuetify.breakpoint.xsOnly ? 'mb-5' : 'mb-2'">
                        <v-avatar size='150' class='d-flex mx-auto'>
                            <img src='https://res.cloudinary.com/felipeflor/image/upload/e_improve/v1553281483/felipe-flor.jpg'
                                 alt="Felipe Rendeiro Flor's profile picture">
                        </v-avatar>
                    </v-flex>

                    <v-flex class='body-1' xs12 sm9>
                        <p>
                            I develop web applications, using mostly Laravel and Vue.
                        </p>
                        <p>
                            Like a lot of developers, I had a completely different career before delving into the
                            Software
                            Engineering field. My original background was Aeronautical Engineering.
                        </p>
                        <p>
                            I will be forever grateful for the opportunities that were provided to me in my former
                            field, but I decided that my career should be
                            guided by something I am truly passionate about, something I see myself doing for fun, that
                            is, Programming.
                        </p>

                        <p>
                            I am more experienced with backend development, specially PHP, but front-end is also pretty
                            fun.
                            This website, for example, was written with Vue (Vuetify), feel free to check the source
                            code on my Github.
                        </p>
                    </v-flex>

                    <v-flex xs12 sm9 offset-sm3>
                        <v-btn to="portfolio" color="secondary" class="ma-0">
                            <v-icon left dark>art_track</v-icon>
                            Check out my portfolio
                            <v-icon right dark>arrow_forward_ios</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </section>


            <section aria-describedby='Life in Canada'>
                <h2 class='display-2 font-weight-thin my-5'>Vehikl</h2>

                <v-layout row wrap>
                    <v-flex xs12>
                        <p>
                            Working at Vehikl has been a dream come true. We are a consultancy company, which means we
                            work with multiple clients with completely different apps, this offers amazing opportunities
                            to
                            learn new technologies. On top of that, we have a very strong culture of collaboration, team
                            work and sharing
                            knowledge. If you're interested in knowing more, <a class="font-weight-bold"
                                                                                href="https://vehikl.com"
                                                                                target="_blank">visit our website!</a>
                        </p>
                        <p>
                            I'm very thankful to be working with some of the most talented and friendly people I have
                            ever seen. I wish everyone could have an awesome job like this. It truly doesn't feel like
                            work,
                            it feels like family, but with paychecks!
                        </p>
                    </v-flex>
                </v-layout>

                <v-layout justify-center>
                    <v-flex xs12 sm8 md6 class="mt-4 mb-5">
                        <v-carousel hide-delimiters height="300">
                            <v-carousel-item v-for='(picture,index) in carouselPictures'
                                             :key='index'
                                             :src="picture.fullSizeImage"
                                             :lazy="index > 0"/>
                        </v-carousel>
                    </v-flex>
                </v-layout>
            </section>

        </v-container>
    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';

    const CLOUDINARY: string = 'https://res.cloudinary.com/felipeflor/image/upload';

    interface CarouselPicture {
        fullSizeImage: string;
        placeholder: string;
    }

    @Component({
        transition: (_, from) => !!from ? 'slide-right' : 'slide-left',
    })
    export default class Home extends Vue {
        protected carouselPictures: CarouselPicture[] = [
            {
                fullSizeImage: `${CLOUDINARY}/c_scale,w_820/v1553825353/vueconf2019-3.jpg`,
                placeholder: `${CLOUDINARY}/e_blur:1000,q_10/v1553825353/vueconf2019-3.jpg`
            },
            {
                fullSizeImage: `${CLOUDINARY}/c_crop,g_xy_center,h_400,w_777,x_0,y_600/v1553580466/working_at_vehikl.jpg`,
                placeholder: `${CLOUDINARY}/e_blur:1000,q_10/v1553580466/working_at_vehikl.jpg`
            },
            {
                fullSizeImage: `${CLOUDINARY}/c_scale,w_820/v1553825050/vueconf2019%20-%20Vuenicorn!.jpg`,
                placeholder: `${CLOUDINARY}/e_blur:1000,q_10/v1553825050/vueconf2019%20-%20Vuenicorn!.jpg`
            },
            {
                fullSizeImage: `${CLOUDINARY}/c_scale,w_820/v1553579347/Chicopee_March_12.jpg`,
                placeholder: `${CLOUDINARY}/e_blur:1000,q_10/v1553579347/Chicopee_March_12.jpg`
            },
            {
                fullSizeImage: `${CLOUDINARY}/c_crop,g_south_west,h_953,w_1406/v1553579773/ice_skating.jpg`,
                placeholder: `${CLOUDINARY}/e_blur:1000,q_10/v1553579773/ice_skating.jpg`
            },
        ];
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
</style>
