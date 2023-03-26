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
         class="absolute -top-128 h-10 w-40 pointer-events-none bg-red-600"/>
    <div v-if="isTargetVisible" class="h-full">
      <slot></slot>
    </div>
    <div v-else class="placeholder h-92 w-92"/>
    <div ref="bottomTarget"
         :class="isDebugging ? 'bg-red-600' : 'bg-transparent'"
         aria-hidden="true"
         class="absolute -bottom-128 h-10 w-40 bg-transparent pointer-events-none"/>
  </div>
</template>