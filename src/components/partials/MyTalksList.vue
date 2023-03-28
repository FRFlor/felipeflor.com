<script lang="ts" setup>
import TalkCard from "@/components/TalkCard.vue"</script>

<template>
  <ul class="mt-6 lg:mt-14 flex flex-wrap gap-6">
    <li>
      <talk-card :chips="['TDD','Vue', 'Typescript']"
                 title="A Wordle on TDD"
                 year="2022"
                 youtube-id="zm8BtYtLwIE">
        <p>In this presentation, I cover the main benefits of following Test Driven Development (TDD), how one can go
          into following this technique and also what are the challenges involved in this transition.</p>
        <p>The presentation will demonstrates TDD by implementing a clone of the popular game <a
            href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Wordle</a> from scratch using the Vue
          3 frontend framework. Professionals from all backgrounds are invited, focus will be given to the process of
          TDD rather than a detailed demonstration of the underlying technology.</p>
        <p>Having this process of building applications via writing tests first will not only make your deliveries more
          robust and protected against regression, but it will also greatly facilitate expansions/refactors while also
          providing a self-documented collection of files that anyone visiting the project can see to understand what
          are the requirements of the different components at play.</p>
      </talk-card>
    </li>
    <li>
      <talk-card :chips="['Laravel','PHP']"
                 title="Laravel Local Development"
                 year="2021"
                 youtube-id="ESVId6riKO0">
        <p>In this meetup I present several different ways a developer can setup their local development environment for
          the Laravel PHP Framework.</p>
        <p>The topics covered should be beneficial for beginners and veterans alike.</p>
        <p>In a bit over an hour, we explore the costs and benefits behind setting up a local development environment
          with <strong>Artisan Serve Command</strong>, <strong>Laravel Valet</strong>, <strong>Laravel
            Homestead</strong> and <strong>Laravel Sail</strong>.</p>
      </talk-card>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  li {
    @apply flex w-full
  }

  li:nth-of-type(2n) {
    justify-content: end;
  }
}
</style>