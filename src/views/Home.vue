<template>
  <div>
    <div>
      <h1>home page</h1>

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
import { Component, Vue } from 'vue-property-decorator';
import Story from './Story.vue';
import Portfolio from './Portfolio.vue';
import Contact from './Contact.vue';

@Component({components: {Story, Portfolio, Contact}})
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
