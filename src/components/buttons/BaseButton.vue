<script lang="ts" setup>
import {ref} from "vue"

const emit = defineEmits(["blur", "click"])
const button = ref<HTMLButtonElement>()

interface IBaseButtonProps {
  type?: string;
}

withDefaults(defineProps<IBaseButtonProps>(), {type: "button"})

function onClick() {
  emit("click", "blur")
  button.value?.classList.add("pressed")
  setTimeout(() => {
    button.value?.classList.remove("pressed")
  }, 250)
}
</script>

<template>
  <component
          :is="type"
          ref="button"
          class="cursor-pointer hover:scale-110 focus:scale-110"
          v-bind="$attrs"
          @blur="emit('blur')"
          @click="onClick"
  >
    <slot>Click Me</slot>
  </component>
</template>
