<template>
  <div>
    <h1>Contact</h1>

    <p>Github</p>
    <p>Email</p>
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
