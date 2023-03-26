<script lang="ts" setup>
import SvgLoader from "@/components/SvgLoader.vue"</script>

<template>
  <div class="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <video
          autoplay
          class="h-full w-full"
          loop
          muted
          playsinline
          poster="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/balloonStory.jpg"
      >
        <source
            src="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/balloonStory.webm"
            type="video/webm"
        >
      </video>
    </a>
    <div class="p-5">
      <a href="#">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Balloon Story</h3>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Animation that <strong
          class="text-blue-500 dark:text-blue-200">won 1st
        place</strong> in the Art Submission Contest of VueConf US 2019!</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Background and object movement are randomly generated; the app also demonstrates collision physics
        between the snow flakes and the balloon. Everything was made from scratch using canvas.
      </p>

      <button
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg-loader class="w-4 h-4 ml-2 -mr-1" svg-name="arrow-right"/>
      </button>
    </div>
  </div>
</template>