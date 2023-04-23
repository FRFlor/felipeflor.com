<script lang="ts" setup>
import {useIntersectionObserver} from "@vueuse/core"
import {ref} from "vue"

const target = ref<HTMLElement>()
const isTargetVisible = ref(false)
const isDebugging = ref(false)

function onIntersectionObserverTriggered(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    if (entries[0]?.isIntersecting) {
        isTargetVisible.value = true
        observer.disconnect()
    }
}

useIntersectionObserver(target, onIntersectionObserverTriggered)
</script>

<template>
    <div class="relative h-full">
        <div ref="target"
             :class="isDebugging? 'bg-red-600' : 'bg-transparent'"
             aria-hidden="true"
             class="absolute left-1/2 -translate-x-1/2 -top-128 -bottom-128 pointer-events-none w-6"/>
        <div v-if="isTargetVisible" class="h-full">
            <slot></slot>
        </div>
        <div v-else class="placeholder h-92 w-92"/>
    </div>
</template>