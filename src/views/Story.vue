<template>
  <div>
    <h1>My Story</h1>

    <p>University Background</p>
    <p>Moving to Canada</p>
    <p>Conestoga College and Competitions</p>
    <p>Techbar</p>
    <p>Working at Vehikl</p>
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
