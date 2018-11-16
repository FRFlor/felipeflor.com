<template>
  <div>
    <h1>Portfolio</h1>

    <photo-card
            title="Budget"
            subtitle="Blabla"
            :has-image-to-the-right="false" :has-hover-slot="true"
            message="Budget description">
      <template slot="hoverMessage">
        <div>Skills involved</div>
        <ul>
          <li>PHP</li>
          <li>Laravel</li>
          <li>Vue</li>
          <li>Vue</li>
        </ul>
      </template>

      <template slot="message">
        <div style="height:200px">
          Budget explained
        </div>
      </template>
    </photo-card>

    <p>Vehiq</p>
    <p>This site</p>
    <p>Some SET programs</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhotoCard from '@/components/PhotoCard.vue';

@Component({
    components: {PhotoCard}
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
  .container{
    background: #6574cd;
  }

  .home {
    height: 100vh;
    width: 100%;
  }
</style>
