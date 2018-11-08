<template>
  <div>
    <h1>Portfolio</h1>

    <p>Budget</p>
    <p>Vehiq</p>
    <p>This site</p>
    <p>Some SET programs</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
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
