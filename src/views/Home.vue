<template>
    <div class="home">
        <v-parallax class="elevation-5"
                    height="300"
                    src="https://res.cloudinary.com/felipeflor/image/upload/c_crop,g_south_west,h_400,x_0,y_0/v1553539328/computer.jpg"
                    dark>
            <v-layout align-center column justify-center>
                <h1 class="display-1 font-weight-thin mb-3 text-xs-center">Full Stack Developer at Vehikl</h1>
                <span class="subheading">Design. Develop. Deliver.</span>
            </v-layout>
        </v-parallax>

        <v-container>
            <section aria-describedby="Who am I?">
                <h2 class="display-2 font-weight-thin my-5">Who am I?</h2>

                <v-layout row wrap>
                    <v-flex shrink xs12 sm3 align-center
                            :class="{'mb-5' : $vuetify.breakpoint.xsOnly, 'mb-3' : $vuetify.breakpoint.smAndUp}">
                        <v-avatar size="150" class="d-flex mx-auto">
                            <img src="https://res.cloudinary.com/felipeflor/image/upload/e_improve/v1553281483/felipe-flor.jpg"
                                 alt="Felipe Flor's profile picture">
                        </v-avatar>
                    </v-flex>

                    <v-flex class="body-1" xs12 sm9>
                        <p>
                            I develop web applications, using mostly Laravel and Vue.
                        </p>

                        <p>
                            I am more experienced with backend development, specially PHP, but front-end is also pretty fun.
                            This website, for example, was written with Vue (Vuetify), feel free to check the source code on
                            my Github.
                        </p>

                        <p>
                            I appreciate the usage of Agile Methodologies, TDD (Test Driven Development) and Pair Programming to
                            deliver robust and frequent content to clients.
                        </p>
                    </v-flex>

                    <v-flex class="body-1" xs12>
                        <p>
                            Like a lot of developers, I had a completely different career before delving into the Software
                            Engineering field. My original background was Aeronautical Engineering.
                        </p>
                        <p>
                            I will be forever grateful for the opportunities that were provided to me in my former field, but I decided that my career should be
                            guided by something I am truly passionate about, something I see myself doing for fun, that is,
                            Programming.
                        </p>
                    </v-flex>
                </v-layout>
            </section>
        </v-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
    }
</script>

<style>
</style>
