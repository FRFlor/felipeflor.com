<script lang="ts" setup>
import ProjectCard from "@/components/ProjectCard.vue"</script>
<template>
  <ul class="mt-6 lg:mt-14 flex justify-around xl:justify-start xl:gap-x-6 gap-y-6 flex-wrap">
    <li>
      <project-card :chips="['Breadth First Search', 'Graph Theory', 'Vue2', 'Typescript', 'Mocha', 'Vue Test Utils']"
                    source-code-url="https://github.com/FRFlor/cat-mouse"
                    title="Cat Mouse"
                    year="2019"
                    video-poster="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/catmouse.jpg"
                    video-source="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/catmouse.webm"
                    website-url="https://catmouse.felipeflor.com/"
      >
        <p>This project started because I wanted to learn Graph Theory and Path Finding Algorithms.</p>
        <p>It demonstrates the <strong>Traveling Salesman Problem</strong>.</p>
        <p>
          This app allows you to create a maze with some rewards for the cat (milk and mouse), the cat
          will calculate the optimal path to get the milk and the mouse.
        </p>
      </project-card>
    </li>

    <li>
      <project-card :chips="['Vue2','Javascript', 'VueConf 2019']"
                    source-code-url="https://codepen.io/frflor/pen/QoRmRq"
                    title="Balloon Story"
                    year="2019"
                    video-poster="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/balloonStory.jpg"
                    video-source="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/balloonStory.webm"
      >
        <p>Animation that <strong>won 1st place</strong> in the Art Submission Contest of VueConf US 2019!</p>
        <p>
          Background and object movement are randomly generated; the app also demonstrates collision physics
          between the snow flakes and the balloon. Everything was made from scratch using canvas.
        </p>
      </project-card>
    </li>

    <li>
      <project-card :chips="['Vue', 'Javascript', 'VueConf 2019']"
                    source-code-url="https://codepen.io/frflor/pen/QoRmRq"
                    title="Balloon Story"
                    video-poster="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/balloonStory.jpg"
                    video-source="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/balloonStory.webm"
      >
        <p>Animation that <strong>won 1st place</strong> in the Art Submission Contest of VueConf US 2019!</p>
        <p>
          Background and object movement are randomly generated; the app also demonstrates collision physics
          between the snow flakes and the balloon. Everything was made from scratch using canvas.
        </p>
      </project-card>
    </li>
  </ul>
</template>