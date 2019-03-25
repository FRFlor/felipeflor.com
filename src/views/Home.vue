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
                <v-layout row>
                    <v-avatar size="150">
                        <img src="https://res.cloudinary.com/felipeflor/image/upload/e_improve/v1553281483/felipe-flor.jpg"
                             alt="Felipe Flor's profile picture">
                    </v-avatar>
                    <div>
                        <p class="body-1 mx-5">I develop web applications, using mostly Laravel and Vue.</p>
                        <p class="body-1 mx-5">
                            I am more experienced with backend development, specially PHP, but front-end is also pretty fun.
                            This website, for example, was written with Vue (using Vuetify), feel free to check the source code on
                            my Github.
                        </p>
                        <p class="body-1 mx-5">
                            I appreciate the usage of Agile Methodologies, TDD (Test Driven Development) and Pair Programming to
                            deliver robust and frequent content to clients.
                        </p>
                    </div>
                </v-layout>
                <p class="body-1 mx-2">
                    Like a lot of developers, I had a completely different career before delving into the Software
                    Engineering field. My original background was Aeronautical Engineering. I will be forever grateful for
                    the opportunities that were provided to me in my former field, but I decided that my career should be
                    guided by something I am truly passionate about, something I see myself doing for fun, that is,
                    Programming.
                </p>
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
    .home {
        height: 2000px;
    }
</style>
