<script lang="ts" setup>
import VHeader from "@/components/VHeader.vue"
import ProjectCard from "@/components/ProjectCard.vue"</script>
<template>
  <v-header/>
  <main class="container px-4 lg:px-10 my-10 mx-auto">
    <h2 class="mt-14 lg:mt-24">Hi there! 👋</h2>
    <p class="mt-6 lg:mt-14">
      I'm Felipe Flor, a web developer based in Ontario, Canada.
    </p>
    <h2 class="mt-14 lg:mt-24">Check out some of my side projects!</h2>
    <ul class="mt-6 lg:mt-14 flex justify-around xl:justify-between gap-y-6 flex-wrap">
      <li v-for="i in 8">
        <project-card title="Balloon Story"
                      video-poster="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/balloonStory.jpg"
                      video-source="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/balloonStory.webm">
          <p>Animation that <strong>won 1st place</strong> in the Art Submission Contest of VueConf US 2019!</p>
          <p>
            Background and object movement are randomly generated; the app also demonstrates collision physics
            between the snow flakes and the balloon. Everything was made from scratch using canvas.
          </p>
        </project-card>
      </li>
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
