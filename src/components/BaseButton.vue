<script lang="ts" setup>
import {ref} from "vue"

const emit = defineEmits(["blur", "click", "focus", "hover-start", "hover-end"])
const button = ref<HTMLButtonElement>()

interface IBaseButtonProps {
  type?: string;
}

withDefaults(defineProps<IBaseButtonProps>(), {type: "button"})

function onClick() {
  emit("click")
  button.value?.classList.add("pressed")
  setTimeout(() => {
    button.value?.classList.remove("pressed")
    button.value?.blur()
  }, 250)
}
</script>

<template>
  <component
      :is="type"
      ref="button"
      class="cursor-pointer"
      @blur="emit('blur')"
      @click="onClick"
  >
    <slot>Click Me</slot>
  </component>
</template>
