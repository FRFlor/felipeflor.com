<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light">Felipe Flor</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" flat><span class="mr-2">Home</span></v-btn>
    <v-btn to="/about" flat><span class="mr-2">About</span></v-btn>
  </v-toolbar>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class NavigationBar extends Vue {
    @Prop() private msg!: string;
  }
</script>
