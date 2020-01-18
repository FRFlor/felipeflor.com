<template>
  <div class="portfolio">
    <v-container>
      <v-layout row wrap justify-space-around>
        <portfolio-card
          v-for="(projectData, index) in projects"
          :key="index"
          :data="projectData"
          class="my-5"
        />
      </v-layout>
    </v-container>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import PortfolioCard, { PortfolioCardData } from '../components/PortfolioCard.vue'
import { MediaCollection } from '../store/MediaCollection'

  @Component({
    // @ts-ignore
    transition: (_, from) => (!from || from.name === 'contact') ? 'slide-right' : 'slide-left',
    components: { PortfolioCard },
    head: {
      title: 'Felipe Flor - Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Felipe Flor - My Portfolio - This page contains some of my personal ' +
            'projects with brief descriptions and links for the demos. Most of my projects are ' +
            'done with Vue, Typescript and Laravel.'
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.felipeflor.com/portfolio' }
      ]
    }
  })
export default class PortfolioPage extends Vue {
    protected catMousePorfolio: PortfolioCardData = {
      media: MediaCollection.catMouse,
      title: 'Cat Mouse',
      description: `
               This project started because I wanted to learn Graph Theory and Path Finding Algorithms. </br></br>
            It demonstrates the <strong class="blue--text text--darken-2">Traveling Salesman Problem.</strong></br></br>
            This app allows you to create a maze with some rewards for the cat (milk and mouse), the cat
            will calculate the optimal path to get the milk and the mouse.
            `,
      keywords: ['Breadth First Search', 'Graph Theory', 'Vue', 'Typescript', 'Mocha', 'Vue Test Utils'],
      website: 'https://catmouse.felipeflor.com/',
      source: 'https://github.com/FRFlor/cat-mouse'
    };

    protected balloonStory: PortfolioCardData = {
      media: MediaCollection.balloonStory,
      title: 'Balloon Story',
      description: `
               Animation that <strong class="blue--text text--darken-2"> won 1st place</strong>
               in the Art Submission Contest of VueConf US 2019! </br></br>
               Background and object movement are randomly generated; the app also demonstrates collision physics
               between the snow flakes and the balloon. Everything was made from scratch using canvas.
            `,
      keywords: ['Vue', 'Javascript', 'VueConf 2019', '1st Place Winner'],
      website: '',
      source: 'https://codepen.io/frflor/pen/QoRmRq'
    };

    protected musicGame: PortfolioCardData = {
      media: MediaCollection.musicGame,
      title: 'Disney Music Game!',
      description: `
               I'm a big fan of Disney Songs in general, so this project had to happen eventually! </br></br>
               Can you guess the song? This WebApp will randomly select a certain Disney song and, by using
               YouTube's API, play random parts of that song at random speeds (super slow or super fast).</br></br>
               You have a few seconds to guess, once the time is up, the answer is revealed with a video playing
               an iconic part of that song.
            `,
      keywords: ['Youtube API', 'Vue', 'Vuetify', 'Typescript'],
      website: 'https://musicgame.felipeflor.com/',
      source: 'https://github.com/FRFlor/music-game'
    };

    protected mobExperiment: PortfolioCardData = {
      media: MediaCollection.mobExperiment,
      title: 'Mob Programming',
      description: `
               An application that simulates a production line. </br> </br>
               It is meant to help the user to understand the benefits of mob programming. It allows manual management by drag-and-dropping workers into any workstation. The animation speeds
               are fully customizable via an intuitive control panel.</br> </br>
               The production statistics are shown in the end as a bar chart.
            `,
      keywords: ['ChartJs', 'Vue', 'Typescript'],
      website: 'https://mob.felipeflor.com/',
      source: 'https://github.com/FRFlor/mob-programming-experience'
    };

    protected spaceGame: PortfolioCardData = {
      media: MediaCollection.spaceGame,
      title: 'Not enough space!',
      description: `
               A simple 3D space game. </br> </br>
               The player is in control of a spaceship inside a tunnel filled with debris. </br></br>
               Can you dodge the space junk and reach the end of the tunnel ? </br>
               Or will your aircraft become part of the debris?
            `,
      keywords: ['WebGL', 'BabylonJS', 'Typescript'],
      website: 'http://space-game.felipeflor.com/',
      source: 'https://github.com/FRFlor/WebGL-Spaceship'
    };

    protected dangerousSigns: PortfolioCardData = {
      media: MediaCollection.dangerousSigns,
      title: 'Dangerous Signs',
      description: `
               An Open Data project! </br> </br>
               What is the most dangerous STOP sign in the city of Kitchener?</br></br>
               To answer this question I make use of Kitchener's Open data database to combine the information of
               traffic collisions and stop signs locations, putting it all together into a neatly organized interactive map.
            `,
      keywords: ['GoogleMaps', 'GeoLocation', 'StreetView', 'Vue Typescript', 'Laravel'],
      website: 'https://dangerous-signs.felipeflor.com/',
      source: 'https://github.com/FRFlor/WebGL-Spaceship'
    };

    protected felipeFlorDotCom: PortfolioCardData = {
      media: MediaCollection.recursionMeme,
      title: 'FelipeFlor.com',
      description: `
               My personal website. You're looking at it right now!</br></br>
               It was made with Nuxt (server-side rendering), Typescript and Vuetify components.
               The server was prepared by me, by installing the required resources for a typical LEMP stack server;
               SSL was achieved with Let's Encrypt (free SSL). The nuxt mini-server runs on a forked pm2 process.
            `,
      keywords: ['Nuxt', 'Vue', 'Vuetify', 'Typescript', 'SSR deployment'],
      website: 'https://www.felipeflor.com/',
      source: 'https://github.com/FRFlor/felipeflor.com'
    };

    protected get projects(): PortfolioCardData[] {
      return [
        this.catMousePorfolio,
        this.balloonStory,
        this.musicGame,
        this.mobExperiment,
        this.dangerousSigns,
        this.spaceGame,
        this.felipeFlorDotCom
      ]
    }
}
</script>
