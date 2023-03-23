<script lang="ts" setup>
import BaseButton from "@/components/buttons/BaseButton.vue"
import PauseSvg from "@/assets/svg/fa-pause.svg?component"
import PlaySvg from "@/assets/svg/fa-play.svg?component"

defineProps<{ isPlaying: boolean }>()
</script>

<template>
  <base-button
      class="control-button border bg-gray-800 border-gray-200 text-gray-200 py-1 px-4 rounded"
      type="button"
      v-bind="$attrs"
  >
    <component :is="isPlaying? PauseSvg : PlaySvg" class="h-5" fill="currentColor"/>
  </base-button>
</template>

<style scoped>
.control-button:hover.pressed, .control-button:focus.pressed {
  @apply border-gray-400 bg-gray-500 text-gray-100 outline-none scale-95
}

.control-button:hover, .control-button:focus {
  @apply border-gray-300 bg-gray-500 text-gray-100 outline-none
}
</style>
