<script lang="ts" setup>

import BaseButton from "@/components/buttons/BaseButton.vue"

defineProps({
  icon: {
    type: String,
    required: false,
    default: "fab fa-github-alt"
  }
})
</script>

<template>
  <base-button
      class="control-button border bg-gray-800 border-gray-200 text-gray-200 py-1 px-4 rounded"
      type="button"
      v-bind="$attrs"
  >
    <i :class="icon" class="text-xl"/>
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
