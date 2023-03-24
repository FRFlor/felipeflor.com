<script lang="ts" setup>
import {computed} from "vue"

const props = defineProps<{
  svgName: string;
}>()

const modules = import.meta.glob("/src/assets/svg/*.svg", {eager: true, as: "raw"})
const rawSvg = computed(() => modules[`/src/assets/svg/${props.svgName}.svg`])
</script>

<template>
  <i v-html="rawSvg"/>
</template>