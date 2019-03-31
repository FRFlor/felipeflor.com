<template>
  <v-app>
    <navigation-bar/>
    <v-content>
      <h1 class="header">Nuxt TypeScript Starter</h1>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import { Person } from "~/types";
import Card from "~/components/Card.vue"
import NavigationBar from "~/components/NavigationBar.vue";

@Component({
  components: {
    NavigationBar,
    Card
  }
})
export default class extends Vue {
  @State people: Person
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
