<template>
    <div>
        <div>
            <h1> Home </h1>
            <p>Who am I?</p>
            <p>Github</p>
            <p>Hobbies</p>
            <p>Love for Winter</p>
            <p>Dogs!</p>
            <p>Life at Vehikl</p>
        </div>
        <story/>
        <portfolio/>
        <contact/>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Story from './Story.vue';
    import Portfolio from './Portfolio.vue';
    import Contact from './Contact.vue';
    import PhotoCard from '@/components/PhotoCard.vue';

    @Component({components: {Story, Portfolio, Contact, PhotoCard}})
    export default class Home extends Vue {
        private loremIpsum: string =
            `Lorem ipsum dolor sit amet, no pro brute tation iuvaret, rationibus constituam te vis, id eirmod veritus laboramus pro. Ei consul atomorum sea. Eu pri antiopam eloquentiam deterruisset, id ius eirmod cotidieque. Eum eu vide tota, ut consetetur persequeris mel.
    Alterum oportere qualisque mea id, aperiam copiosae sea cu. Dolores apeirian dissentiet at sed, sea ei ipsum clita, mel ne efficiendi accommodare consequuntur. Est id tale audire. Et duo idque elitr, te sonet referrentur vel. Mea id justo homero, deseruisse delicatissimi sit te, vidit mentitum concludaturque usu te.
    Duo modo comprehensam eu, nec ei rebum soleat periculis. Id ridens deserunt evertitur mea. Qui id mazim splendide, sit an habemus invenire honestatis. An elit natum vis.`;
    }
</script>

<style lang="scss" scoped>
    .container {
        background: #6574cd;
    }

    .home {
        height: 100vh;
        width: 100%;
    }
</style>
