<script lang="ts" setup>
import VChip from "./VChip.vue"

interface IProjectCardProps {
  videoSource: string;
  videoPoster: string;
  title: string;
  year?: string;
  websiteUrl?: string;
  sourceCodeUrl?: string;
  chips?: string[];
}

withDefaults(defineProps<IProjectCardProps>(), {chips: () => [], year: "20XX"})
</script>

<template>
  <div
      class="project-card overflow-hidden flex flex-col h-full w-full sm:w-96 3xl:w-120 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <video
        :poster="videoPoster"
        autoplay
        class="w-full"
        loop
        muted
        playsinline
        preload="none"
    >
      <source
          :src="videoSource"
          type="video/webm"
      >
    </video>
    <div class="p-5 flex flex-col flex-grow">
      <div class="flex justify-between">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-100">{{ title }}</h3>
        <p>{{ year }}</p>
      </div>

      <div class="flex flex-col h-full justify-between">
        <div>
          <slot><p>This is a placeholder for the description of the project</p></slot>
        </div>

        <div>
          <section class="mb-4">
            <v-chip v-for="chip in chips" :key="chip" :text="chip"/>
          </section>

          <section class="gap-4 flex">
            <a v-if="websiteUrl"
               :href="websiteUrl"
               class="text-white hover:text-orange-200 bg-teal-600 hover:bg-teal-800 dark:bg-teal-800 dark:hover:bg-teal-700"
               data-test="visit-website">
              Visit website
            </a>
            <a v-if="sourceCodeUrl"
               :href="sourceCodeUrl"
               class="text-white hover:text-blue-200 bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700"
               data-test="visit-source-code">
              See source code
            </a>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  @apply inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-center rounded-lg
}
</style>

<style>
.project-card p {
  @apply mb-3 font-thin text-sm text-gray-700 dark:text-gray-300;
}

.project-card strong {
  @apply text-blue-500 dark:text-blue-200
}
</style>