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
  button.value?.classList.add("pressed")
  setTimeout(() => {
    button.value?.classList.remove("pressed")
  }, 250)
}
</script>

<template>
  <button class="social-button cursor-pointer border border-blue-200 text-blue-200 px-4 py-2 rounded-full"
          ref="button"
          @blur="emit('blur')"
          @click="onClick"
          @focus="emit('focus', description)"
          @mouseenter="emit('hover-start', description)"
          @mouseleave="emit('hover-end', description)"
  >
    <i :class="icon" class="text-4xl"/>
  </button>
</template>


<style scoped>
.social-button:hover.pressed, .social-button:focus.pressed {
  @apply border-blue-400 bg-blue-500 text-blue-100 outline-none scale-95
}

.social-button:hover, .social-button:focus {
  @apply border-blue-300 bg-blue-400 text-blue-100 outline-none
}
</style>
