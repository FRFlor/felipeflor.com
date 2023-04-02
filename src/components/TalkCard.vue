<script lang="ts" setup>
import VChip from "@/components/VChip.vue"

interface IProjectCardProps {
  videoUrl: string;
  videoPoster: string;
  title: string;
  year?: string;
  chips?: string[];
}

withDefaults(defineProps<IProjectCardProps>(), {chips: () => [], year: "20XX"})
</script>

<template>
  <div
      class="talk-card flex flex-col overflow-hidden h-full w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a :aria-label="`Watch ${title}`" :href="videoUrl" class="p-0 hover:opacity-40 hover:scale-105" target="_blank">
      <img :alt="`${title} video thumbnail`" :src="videoPoster">
    </a>
    <div class="p-5 flex flex-col flex-grow">
      <div class="flex justify-between">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-100">{{ title }}</h3>
        <p>{{ year }}</p>
      </div>

      <div class="flex flex-col h-full justify-between">
        <div>
          <slot><p>This is a placeholder for the description of the project</p></slot>
        </div>

        <section class="mt-4">
          <v-chip v-for="chip in chips" :key="chip" :text="chip"/>
        </section>
      </div>
    </div>
  </div>

</template>

<style>
.talk-card p {
  @apply mb-3 font-thin text-sm text-gray-700 dark:text-gray-300;
}

.talk-card strong {
  @apply text-blue-500 dark:text-blue-200
}

.talk-card a {
  @apply text-blue-500 dark:text-blue-400 underline font-bold
}
</style>