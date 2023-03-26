<script lang="ts" setup>
import BaseButton from "@/components/buttons/BaseButton.vue"
import SvgLoader from "@/components/SvgLoader.vue"

interface ISocialLinkProps {
  icon: string,
  description: string,
  href?: string
}

withDefaults(defineProps<ISocialLinkProps>(), {href: "#"})


const emit = defineEmits(["blur", "click", "focus", "hover-start", "hover-end"])
</script>

<template>
  <base-button :href="href"
               class="social-button cursor-pointer border border-blue-200 text-blue-200 px-4 py-2 rounded-full h-8 lg:h-9"
               target="_blank"
               type="a"
               v-bind="$attrs"
               @blur="emit('blur')"
               @focus="emit('focus', description)"
               @mouseenter="emit('hover-start', description)"
               @mouseleave="emit('hover-end', description)"
  >
    <svg-loader :svg-name="icon"/>
  </base-button>
</template>


<style scoped>
.social-button:hover.pressed, .social-button:focus.pressed {
  @apply border-blue-400 bg-blue-500 text-blue-100 outline-none scale-95
}

.social-button:hover, .social-button:focus {
  @apply border-blue-300 bg-blue-400 text-blue-100 outline-none
}
</style>
