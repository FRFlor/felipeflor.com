<script lang="ts" setup>
import TalkCard from "@/components/TalkCard.vue"</script>

<template>
  <ul class="mt-6 lg:mt-14 flex flex-wrap gap-6">
    <li v-for="i in 10" class="w-full">
      <talk-card :chips="['abc','def']" title="Bob" youtube-id="zm8BtYtLwIE"/>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  li {
    display: flex;
  }

  li:nth-of-type(2n) {
    justify-content: end;
  }
}
</style>