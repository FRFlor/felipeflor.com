<script lang="ts" setup>
import VHeader from "@/components/partials/VHeader.vue"
import MyProjectsList from "@/components/partials/MyProjectsList.vue"
import AnimatedBackground from "@/components/partials/AnimatedBackground.vue"
import VehiklLogo from "@/assets/vehikl-logo.webp"</script>
<template>
  <animated-background/>
  <v-header/>
  <main class="container px-4 lg:px-10 my-10 mx-auto">
    <h2 class="mt-14 lg:mt-24">Hi there! 👋</h2>
    <p class="mt-6 lg:mt-14">
      I'm Felipe Flor, a web developer based in Ontario, Canada.
    </p>
    <h2 class="mt-14 lg:mt-24">Check out some of my side projects!</h2>
    <my-projects-list/>
    <h2 class="mt-14 lg:mt-24">I love participating in events</h2>
    <ul class="mt-6 lg:mt-14">
      <li>
      </li>
      <li><a href="#">Project 2</a></li>
      <li><a href="#">Project 3</a></li>
    </ul>

    <h2 class="mt-14 lg:mt-24">Vehikl</h2>

    <div class="flex flex-col lg:flex-row items-center mt-6 lg:mt-14">
      <div>
        <img :src="VehiklLogo" alt="Vehikl Logo" class="w-40 lg:w-96 mb-4 lg:mb-0">
      </div>
      <p class="ml-0 lg:ml-3">
        Working at Vehikl has been a dream come true. We are a consultancy company, which means we work with multiple
        clients with completely different apps, this offers amazing opportunities to learn new technologies.
      </p>
    </div>

    <p class="mt-6 lg:mt-14">
      On top of that, we have a very strong culture of collaboration, team work and sharing knowledge.
      If you're interested in knowing more, <a href="https://vehikl.com" target="_blank">visit our website</a>!
    </p>
    <p class="mt-6 lg:mt-14">
      I'm very thankful to be working with some of the most talented and friendly people I have ever seen.
      I wish everyone could have an awesome job like this.
    </p>
  </main>
</template>
