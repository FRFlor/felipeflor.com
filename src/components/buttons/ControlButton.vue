<script lang="ts" setup>
import BaseButton from "@/components/buttons/BaseButton.vue"
import SvgLoader from "@/components/SvgLoader.vue"

defineProps<{ isPlaying: boolean }>()
</script>

<template>
  <base-button
      class="control-button border bg-gray-800 border-gray-200 text-gray-200 py-1 px-4 h-6 rounded"
      type="button"
      :aria-label="isPlaying? 'Pause animation' : 'Play animation'"
      v-bind="$attrs"
  >
    <svg-loader :svg-name="isPlaying? 'fa-pause' : 'fa-play'"/>
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
