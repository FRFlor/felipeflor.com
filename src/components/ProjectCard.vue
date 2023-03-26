<script lang="ts" setup>
import VChip from "@/components/VChip.vue"

defineProps<{
  videoSource: string;
  videoPoster: string;
  title: string;
  websiteUrl?: string;
  sourceCodeUrl?: string;
}>()
</script>

<template>
  <div
      class="project-card overflow-hidden w-full md:w-96 2xl:w-120 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <video
        :poster="videoPoster"
        autoplay
        class="h-full w-full"
        loop
        muted
        playsinline
    >
      <source
          :src="videoSource"
          type="video/webm"
      >
    </video>
    <div class="p-5 h-92 flex flex-col">
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-100">{{ title }}</h3>
      <slot><p>This is a placeholder for the description of the project</p></slot>

      <div class="flex flex-col h-full justify-between">
        <section>
          <v-chip text="Vue"/>
          <v-chip text="Javascript"/>
          <v-chip text="VueConf 2019"/>
        </section>

        <section class="gap-4 flex">
          <a v-if="websiteUrl"
             :href="websiteUrl"
             class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             data-test="visit-website">
            Visit website
          </a>
          <a v-if="sourceCodeUrl"
             :href="sourceCodeUrl"
             class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
             data-test="visit-source-code">
            See source code
          </a>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  @apply inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none
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