<template>
    <div class='portfolio'>
        <v-container>
            <v-layout row wrap justify-center>
                <portfolio-card :data='catMousePorfolio' :class="$vuetify.breakpoint.xsOnly ? 'my-5' : 'ma-5'"/>
                <portfolio-card :data='balloonStory' :class="$vuetify.breakpoint.xsOnly ? 'my-5' : 'ma-5'"/>
                <portfolio-card :data='musicGame' :class="$vuetify.breakpoint.xsOnly ? 'my-5' : 'ma-5'"/>
                <portfolio-card :data='felipeFlorDotCom' :class="$vuetify.breakpoint.xsOnly ? 'my-5' : 'ma-5'"/>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import PortfolioCard, {PortfolioCardData} from '@/components/PortfolioCard.vue';

    @Component({components: {PortfolioCard}})
    export default class Portfolio extends Vue {
        private catMousePorfolio: PortfolioCardData = {
            imageSrc: 'https://camo.githubusercontent.com/cab2013dfd5c75db71fedba72738e41597d848c6/68747470733a2f2f7' +
                '265732e636c6f7564696e6172792e636f6d2f66656c697065666c6f722f696d6167652f75706c6f61642f635f7363616c65' +
                '2c685f3435302f76313535323732303438372f312e6a7067',
            imageAlt: 'Screencap of Cat & Mouse app',
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

        private balloonStory: PortfolioCardData = {
            imageSrc: 'https://res.cloudinary.com/felipeflor/image/upload/v1553831891/Balloon%20story.png',
            imageAlt: 'Art of girl catching a balloon',
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

        private musicGame: PortfolioCardData = {
            imageSrc: 'https://res.cloudinary.com/felipeflor/image/upload/v1553845714/The%20MusicGame.png',
            imageAlt: 'Screenshot of webapp showing ariel (Little Mermaid) singing \"Part of Your World\"',
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

        private felipeFlorDotCom: PortfolioCardData = {
            imageSrc: 'https://res.cloudinary.com/felipeflor/image/upload/v1553837166/recursion_meme.png',
            imageAlt: 'Meme about recursion',
            title: 'FelipeFlor.com',
            description: `
               My personal website. You're looking at it right now!</br></br>
               It was made with Vue using Vuetify components. The server was prepared by me,
               by installing the required resources for a typical LEMP stack server;
               SSL was achieved with Let's Encrypt (free SSL).
            `,
            keywords: ['Vue', 'Vuetify', 'Typescript'],
            website: 'https://www.felipeflor.com/',
            source: 'https://github.com/FRFlor/felipeflor.com',
        };
    }
</script>

