<script lang="ts" setup>
defineProps<{
  svgName: string;
}>()

import.meta.glob("@/assets/*.svg", {eager: true, as: "raw"})
</script>

<template>

</template>