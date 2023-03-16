<script lang="ts" setup>
import BaseButton from "@/components/buttons/BaseButton.vue"
import {computed} from "vue"
import GithubSVG from "@/assets/font-awesome/github-alt.svg"
import EmailSVG from "@/assets/font-awesome/envelope.svg"
import TwitterSVG from "@/assets/font-awesome/twitter.svg"

interface ISocialLinkProps {
  icon: string,
  description: string,
  href?: string
}

const props = withDefaults(defineProps<ISocialLinkProps>(), {href: "#"})

const SvgComponent = computed(() => {
  switch (props.icon) {
    case "github":
      return GithubSVG
    case "email":
      return EmailSVG
    case "twitter":
      return TwitterSVG
  }
})

const emit = defineEmits(["blur", "click", "focus", "hover-start", "hover-end"])
</script>

<template>
  <base-button :href="href"
               class="social-button cursor-pointer border border-blue-200 text-blue-200 px-4 py-2 rounded-full"
               target="_blank"
               type="a"
               v-bind="$attrs"
               @blur="emit('blur')"
               @focus="emit('focus', description)"
               @mouseenter="emit('hover-start', description)"
               @mouseleave="emit('hover-end', description)"
  >
    <component :is="SvgComponent" class="h-7 lg:h-10" fill="currentColor"/>
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
