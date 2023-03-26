<script lang="ts" setup>
import {computed} from "vue"

const props = defineProps<{
  svgName: string;
}>()

const svgsAvailable = import.meta.glob("/src/assets/svg/*.svg", {eager: true, as: "raw"})

const rawSvg = computed(() => svgsAvailable[`/src/assets/svg/${props.svgName}.svg`])
</script>

<template>
  <i v-bind="$attrs" v-html="rawSvg"/>
</template>

<style scoped>
:deep(svg) {
  height: 100%;
  width: 100%;
  fill: currentColor;
}
</style>