<template>
  <div class="home">
    <v-parallax
      class="elevation-5"
      height="300"
      :src="MediaCollection.homepageBanner.mainSource"
      :alt="MediaCollection.homepageBanner.alt"
      dark
    >
      <v-layout align-center column justify-center>
        <div class="display-1 font-weight-thin mb-3 text-xs-center">
          Full Stack Developer at Vehikl
        </div>
        <span class="subheading">Laravel - Vue - Typescript</span>
      </v-layout>
    </v-parallax>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm3>
          <h2 class="display-2 font-weight-thin my-5">
            Who am I?
          </h2>
        </v-flex>

        <v-flex
          shrink
          xs12
          sm3
          align-center
          :class="$vuetify.breakpoint.xsOnly ? 'mb-5' : 'mb-2'"
        >
          <v-avatar size="150" class="d-flex mx-auto">
            <img
              :src="MediaCollection.felipeAvatar.mainSource"
              :alt="MediaCollection.felipeAvatar.alt"
            >
          </v-avatar>
        </v-flex>

        <v-flex class="body-1" xs12 sm9>
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
            I love programming, on both front-end and back-end. Most of my works are made using PHP
            (Laravel) and Typescript (Vue).
            This website, for example, is powered by Nuxt and Vuetify, with the entire codebase written
            in Typescript.
            Feel free to check the source code on my Github.
          </p>

          <p>
            Last but not least, I believe it is the responsibility of every developer to make sure their applications are
            as accessible as possible. I hope this Website reflects my passion for making the web accessible for all, but I realize
            there's always something to improve, so if you have suggestions on how to make it more accessible, please let me know!
          </p>
        </v-flex>

        <v-flex xs12 sm9 offset-sm3>
          <v-btn to="portfolio" color="secondary" class="ma-0 dark-button">
            <v-icon left dark>
              art_track
            </v-icon>
            Check out my portfolio
            <v-icon right dark>
              arrow_forward_ios
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="display-2 font-weight-thin my-5">
            Vehikl
          </h2>
        </v-flex>

        <v-flex xs12>
          <p>
            Working at Vehikl has been a dream come true. We are a consultancy company, which means we
            work with multiple clients with completely different apps, this offers amazing opportunities
            to
            learn new technologies. On top of that, we have a very strong culture of collaboration, team
            work and sharing
            knowledge. If you're interested in knowing more, <a
              class="font-weight-bold blue--text text--darken-3"
              href="https://vehikl.com"
              target="_blank"
            >visit our website!</a>
          </p>
          <p>
            I'm very thankful to be working with some of the most talented and friendly people I have
            ever seen. I wish everyone could have an awesome job like this. It truly doesn't feel like
            work, it feels like family, but with paychecks!
          </p>
        </v-flex>
      </v-layout>

      <v-layout justify-center>
        <v-flex xs12 sm8 md6 class="mt-4 mb-5">
          <v-carousel
            hide-delimiters
            hide-controls
            height="300"
          >
            <v-carousel-item
              v-for="(picture,index) in carouselPictures"
              :key="index"
              :src="picture"
              :lazy="index > 0"
            />
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { MediaCollection } from '../store/MediaCollection'

    // @ts-ignore
    @Component({ transition: (_, from) => from ? 'slide-right' : 'slide-left' })
export default class Home extends Vue {
        protected MediaCollection: MediaCollection = MediaCollection;

        protected carouselPictures: string[] = [
          MediaCollection.vueconf2019.mainSource,
          MediaCollection.vuenicorn.mainSource,
          MediaCollection.skiAtChicopee.mainSource,
          MediaCollection.workingAtVehikl.mainSource,
          MediaCollection.iceSkating.mainSource
        ]
}
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
</style>
