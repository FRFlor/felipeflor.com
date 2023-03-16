<script lang="ts" setup>
import VHeader from "@/components/VHeader.vue"
import ProjectCard from "@/components/ProjectCard.vue"</script>

<template>
  <v-header/>

  <main class="container mx-2 lg:mx-10 my-10">
    <section class="my-6">
      <h2 class="text-3xl font-bold text-gray-900">Hi there 👋!</h2>
      <p class="text-lg text-gray-700 mt-2">
        I'm Felipe Flor, a web developer based in Ontario, Canada.
      </p>
      <p class="text-lg text-gray-700 mt-2">
        I develop web applications, using mostly Laravel and Vue.

        I appreciate the usage of Agile Methodologies, TDD (Test Driven Development) and Mob Programming to deliver
        robust and frequent content to clients.

        Like a lot of developers, I had a completely different career before delving into the Software Engineering
        field. My original background was Aeronautical Engineering. I will be forever grateful for the opportunities
        that were provided to me in my former field, but I decided that my career should be guided by something I am
        truly passionate about, something I see myself doing for fun, that is, Programming.
      </p>
    </section>

    <section class="my-6">
      <h2 class="text-3xl font-bold text-gray-900">I love participating in events</h2>
      <ul class="list-disc list-inside mt-2">
        <li><a href="#">Project 1</a></li>
        <li><a href="#">Project 2</a></li>
        <li><a href="#">Project 3</a></li>
      </ul>
    </section>


    <section class="my-6">
      <h2 class="text-3xl font-bold text-gray-900">Some of my side projects</h2>
      <ul class="mt-2">
        <li>
          <project-card/>
        </li>
        <li><a href="#">Project 2</a></li>
        <li><a href="#">Project 3</a></li>
      </ul>
    </section>

    <section class="my-6">
      <h2 class="text-3xl font-bold text-gray-900">My Skills</h2>
      <p class="text-lg text-gray-700 mt-2">
        Here are some of the skills that I've acquired:
      </p>
      <ul class="list-disc list-inside mt-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue</li>
        <li>Node.js</li>
        <li>SQL</li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss">
</style>
