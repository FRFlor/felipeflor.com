<template>
    <div class='portfolio'>
        <v-container>
            <v-layout row wrap justify-space-around>
                <portfolio-card v-for="(projectData, index) in projects"
                                :key="index"
                                :data='projectData'
                                class="my-5"/>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'nuxt-property-decorator';
    import PortfolioCard, {PortfolioCardData} from '~/components/PortfolioCard.vue';
    import {MEDIA_MAP, ExistingMedia} from '~/assets/js/medias';

    @Component({
        components: {PortfolioCard},
        transition: (_, from) => (!from || from.name === 'posts') ? 'slide-right' : 'slide-left',
    })
    export default class PortfolioPage extends Vue {
        protected catMousePorfolio: PortfolioCardData = {
            media: MEDIA_MAP.get(ExistingMedia.catMouse),
            title: 'Cat Mouse',
            description: `
               This project started because I wanted to learn Graph Theory and Path Finding Algorithms. </br></br>
            It demonstrates the <strong class="blue--text text--darken-2">Traveling Salesman Problem.</strong></br></br>
            This app allows you to create a maze with some rewards for the cat (milk and mouse), the cat
            will calculate the optimal path to get the milk and the mouse.
            `,
            keywords: ['Breadth First Search', 'Graph Theory', 'Vue', 'Typescript', 'Mocha', 'Vue Test Utils'],
            website: 'https://catmouse.felipeflor.com/',
            source: 'https://github.com/FRFlor/cat-mouse',
        };

        protected balloonStory: PortfolioCardData = {
            media: MEDIA_MAP.get(ExistingMedia.balloonStory),
            title: 'Balloon Story',
            description: `
               Animation that <strong class="blue--text text--darken-2"> won 1st place</strong>
               in the Art Submission Contest of VueConf US 2019! </br></br>
               Background and object movement are randomly generated; the app also demonstrates collision physics
               between the snow flakes and the balloon. Everything was made from scratch using canvas.
            `,
            keywords: ['Vue', 'Javascript', 'VueConf 2019', '1st Place Winner'],
            website: '',
            source: 'https://codepen.io/frflor/pen/QoRmRq',
        };

        protected musicGame: PortfolioCardData = {
            media: MEDIA_MAP.get(ExistingMedia.musicGame),
            title: 'Disney Music Game!',
            description: `
               I'm a big fan of Disney Songs in general, so this project had to happen eventually! </br></br>
               Can you guess the song? This WebApp will randomly select a certain Disney song and, by using
               YouTube's API, play random parts of that song at random speeds (super slow or super fast).</br></br>
               You have a few seconds to guess, once the time is up, the answer is revealed with a video playing
               an iconic part of that song.
            `,
            keywords: ['Vue', 'Vuetify', 'Youtube', 'Laravel', 'MySql'],
            website: 'https://musicgame.felipeflor.com/',
            source: 'https://github.com/FRFlor/music-game',
        };

        protected felipeFlorDotCom: PortfolioCardData = {
            media: MEDIA_MAP.get(ExistingMedia.recursionMeme),
            title: 'FelipeFlor.com',
            description: `
               My personal website. You're looking at it right now!</br></br>
               It was made with Nuxt (server-side rendering), Typescript and Vuetify components.
               The server was prepared by me, by installing the required resources for a typical LEMP stack server;
               SSL was achieved with Let's Encrypt (free SSL).
            `,
            keywords: ['Nuxt', 'Vue', 'Vuetify', 'Typescript'],
            website: 'https://www.felipeflor.com/',
            source: 'https://github.com/FRFlor/felipeflor.com',
        };

        protected get projects(): PortfolioCardData[] {
            return [
                this.catMousePorfolio,
                this.balloonStory,
                this.musicGame,
                this.felipeFlorDotCom,
            ]
        }
    }
</script>

