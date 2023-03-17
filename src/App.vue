<script lang="ts" setup>
import VHeader from "@/components/VHeader.vue"
import ProjectCard from "@/components/ProjectCard.vue"</script>
<template>
  <v-header/>
  <main class="container px-4 lg:px-10 my-10">
    <h2 class="mt-14 lg:mt-24">Hi there! 👋</h2>
    <p class="mt-6 lg:mt-14">
      I'm Felipe Flor, a web developer based in Ontario, Canada.
    </p>
    <p class="text-primary">Hello</p>
    <h2 class="mt-14 lg:mt-24">Check out some of my side projects!</h2>
    <ul class="mt-6 lg:mt-14">
      <li>
        <project-card/>
      </li>
      <li><a href="#">Project 2</a></li>
      <li><a href="#">Project 3</a></li>
    </ul>

    <h2 class="mt-14 lg:mt-24">I love participating in events</h2>
    <ul class="mt-6 lg:mt-14">
      <li>
      </li>
      <li><a href="#">Project 2</a></li>
      <li><a href="#">Project 3</a></li>
    </ul>
  </main>
</template>

<style lang="scss">
</style>
