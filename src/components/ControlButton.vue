<script lang="ts" setup>

import {ref} from "vue"

defineProps({
  icon: {
    type: String,
    required: false,
    default: "fab fa-github-alt"
  },
  description: {
    type: String,
    required: false,
    default: ""
  }
})
const emit = defineEmits(["blur", "click", "focus", "hover-start", "hover-end"])
const button = ref<HTMLButtonElement>()

function onClick() {
  emit("click")
  setTimeout(() => button.value?.blur())
}
</script>

<template>
  <button ref="button"
          class="control-button cursor-pointer border bg-gray-800 border-gray-200 text-gray-200 py-1 px-4 rounded"
          @blur="emit('blur')"
          @click="emit('click')"
          @focus="emit('focus', description)"
          @mouseenter="emit('hover-start', description)"
          @mouseleave="emit('hover-end', description)"
  >
    <i :class="icon" class="text-xl"/>
  </button>
</template>

<style scoped>
.control-button:hover, .control-button:focus {
  @apply border-gray-300 bg-gray-500 text-gray-100 outline-none
}
</style>
