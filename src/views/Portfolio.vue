<template>
    <div class="portfolio">
        <v-container>
            <portfolio-card :data="catMousePorfolio"/>
        </v-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import PortfolioCard, {PortfolioCardData} from "@/components/PortfolioCard.vue";

    @Component({
        components: {PortfolioCard}
    })
    export default class Portfolio extends Vue {
        private catMousePorfolio: PortfolioCardData = {
            imageSrc: "https://camo.githubusercontent.com/cab2013dfd5c75db71fedba72738e41597d848c6/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f66656c697065666c6f722f696d6167652f75706c6f61642f635f7363616c652c685f3435302f76313535323732303438372f312e6a7067",
            imageAlt: "Screencap of Cat & Mouse app",
            title: "Cat Mouse",
            description: `
               A Path Finding exercise! It explores the traveling salesman problem.
            This app allows you to create a maze with rewards (milk and mouse), the cat
            will get all the rewards it can with the least amount of movements.
            `,
            skills: ["Breadth First Search", "Vue", "Typescript", "Mocha", "Vue Test Utils"],
            website: "",
            source: "",
        };
    }
</script>

