<template>
    <div class='portfolio'>
        <v-container>
            <portfolio-card :data='catMousePorfolio' class='my-5'/>
            <portfolio-card :data='balloonStory' class='my-5'/>
            <portfolio-card :data='felipeFlorDotCom' class='my-5'/>
        </v-container>
    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import PortfolioCard, {PortfolioCardData} from '@/components/PortfolioCard.vue';

    @Component({ components: {PortfolioCard} })
    export default class Portfolio extends Vue {
        private catMousePorfolio: PortfolioCardData = {
            imageSrc: 'https://camo.githubusercontent.com/cab2013dfd5c75db71fedba72738e41597d848c6/68747470733a2f2f7' +
                '265732e636c6f7564696e6172792e636f6d2f66656c697065666c6f722f696d6167652f75706c6f61642f635f7363616c65' +
                '2c685f3435302f76313535323732303438372f312e6a7067',
            imageAlt: 'Screencap of Cat & Mouse app',
            title: 'Cat Mouse',
            description: `
               A Path Finding exercise! It explores the traveling salesman problem.</br>
            This app allows you to create a maze with rewards (milk and mouse), the cat
            will get all the rewards it can with the least amount of movements.
            `,
            keywords: ['Breadth First Search', 'Vue', 'Typescript', 'Mocha', 'Vue Test Utils'],
            website: 'https://catmouse.felipeflor.com/',
            source: 'https://github.com/FRFlor/cat-mouse',
        };

        private balloonStory: PortfolioCardData = {
            imageSrc: 'https://res.cloudinary.com/felipeflor/image/upload/v1553831891/Balloon%20story.png',
            imageAlt: 'Art of girl catching a balloon',
            title: 'Balloon Story',
            description: `
               Artistic Animation that <strong class="blue--text text--darken-2"> won 1st place</strong>
               in the VueConf US 2019! </br></br>
               Background and object movement are randomly generated; the app also demonstrates collision physics
               between the snow flakes and the balloon. Everything was made from scratch using canvas.
            `,
            keywords: ['Vue', 'Javascript', 'VueConf 2019', '1st Place Winner'],
            website: '',
            source: 'https://codepen.io/frflor/pen/QoRmRq',
        };

        private felipeFlorDotCom: PortfolioCardData = {
            imageSrc: 'https://res.cloudinary.com/felipeflor/image/upload/v1553837166/recursion_meme.png',
            imageAlt: 'Meme about recursion',
            title: 'FelipeFlor.com',
            description: `
               My personal website. You're looking at it right now!</br></br>
               It was made with Vue using Vuetify components. The server was prepared by myself,
               it is a typical LEMP stack server; SSL was achieved with Let's Encrypt (free SSL).
            `,
            keywords: ['Vue', 'Vuetify', 'Typescript'],
            website: 'https://www.felipeflor.com/',
            source: 'https://github.com/FRFlor/felipeflor.com',
        };
    }
</script>

