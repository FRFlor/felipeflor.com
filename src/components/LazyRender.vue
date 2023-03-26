<script lang="ts" setup>
import {useIntersectionObserver} from "@vueuse/core"
import {ref} from "vue"

const topTarget = ref<HTMLElement>()
const bottomTarget = ref<HTMLElement>()
const isTargetVisible = ref(false)
const isDebugging = ref(false)

function onIntersectionObserverTriggered(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  if (entries[0]?.isIntersecting) {
    isTargetVisible.value = true
    observer.disconnect()
  }
}

useIntersectionObserver(topTarget, onIntersectionObserverTriggered)
useIntersectionObserver(bottomTarget, onIntersectionObserverTriggered)
</script>

<template>
  <div class="relative h-full">
    <div ref="topTarget"
         :class="isDebugging? 'bg-red-600' : 'bg-transparent'"
         aria-hidden="true"
         class="observer-target pointer-events-none h-6 w-6 buffer top-0 -translate-y-128 top-buffer"/>
    <div v-if="isTargetVisible" class="h-full">
      <slot></slot>
    </div>
    <div v-else class="placeholder h-92 w-92"/>
    <div ref="bottomTarget"
         :class="isDebugging ? 'bg-red-600' : 'bg-transparent'"
         aria-hidden="true"
         class="observer-target pointer-events-none buffer bottom-0 translate-y-128 bottom-buffer"/>
  </div>
</template>

<style scoped>
.buffer {
  @apply h-6 w-6 absolute left-1/2 -translate-x-1/2
}
</style>