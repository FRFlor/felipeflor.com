<script lang="ts" setup>
import {useIntersectionObserver} from "@vueuse/core"
import {ref} from "vue"

const topTarget = ref<HTMLElement>()
const bottomTarget = ref<HTMLElement>()
const isTargetVisible = ref(false)

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
  <div class="relative">
    <div ref="topTarget" class="absolute -top-128 h-4 w-4 bg-red-600"/>
    <div v-if="isTargetVisible">
      <slot></slot>
    </div>
    <div ref="bottomTarget" class="absolute -bottom-128 h-4 w-4 bg-red-600"/>
  </div>
</template>