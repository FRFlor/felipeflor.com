<script lang="ts" setup>
import ProjectCard from "@/components/ProjectCard.vue"</script>
<template>
  <ul class="mt-6 lg:mt-14 flex justify-around xl:justify-start xl:gap-x-6 gap-y-6 flex-wrap">
    <li>
      <project-card :chips="['Breadth First Search', 'Graph Theory', 'Vue2', 'Typescript', 'Mocha', 'Vue Test Utils']"
                    title="Cat Mouse"
                    video-poster="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/catmouse.jpg"
                    video-source="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/catmouse.webm"
                    year="2019"
                    source-code-url="https://github.com/FRFlor/cat-mouse"
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
                    title="Balloon Story"
                    video-poster="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/balloonStory.jpg"
                    video-source="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/balloonStory.webm"
                    year="2019"
                    source-code-url="https://codepen.io/frflor/pen/QoRmRq"
      >
        <p>Animation that <strong>won 1st place</strong> in the Art Submission Contest of VueConf US 2019!</p>
        <p>
          Background and object movement are randomly generated; the app also demonstrates collision physics
          between the snow flakes and the balloon. Everything was made from scratch using canvas.
        </p>
      </project-card>
    </li>

    <li>
      <project-card :chips="['Youtube API', 'Vue', 'Vuetify', 'Typescript']"
                    title="Disney Music Game!"
                    video-poster="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/musicgame.jpg"
                    video-source="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/musicgame.webm"
                    source-code-url="https://github.com/FRFlor/music-game"
                    website-url="https://musicgame.felipeflor.com/"
                    year="2019"
      >
        <p>I'm a big fan of Disney Songs in general, so this project had to happen eventually!</p>
        <p>Can you guess the song? This WebApp will randomly select a certain Disney song and, by using YouTube's API,
          play random parts of that song at random speeds (super slow or super fast).</p>
        <p>You have a few seconds to guess, once the time is up, the answer is revealed with a video playing an iconic
          part of that song.</p>
      </project-card>
    </li>

    <li>
      <project-card :chips="['ChartJs', 'Vue', 'Typescript']"
                    source-code-url="https://github.com/FRFlor/mob-programming-experience"
                    title="Mob Programming"
                    video-poster="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/MobExperiment.jpg"
                    video-source="https://res.cloudinary.com/felipeflor/video/upload/v1556653952/felipeflor.com/MobExperiment.webm"
                    website-url="https://mob.felipeflor.com/"
                    year="2019"
      >
        <p>An application that simulates a production line.</p>
        <p>It is meant to help the user to understand the benefits of mob programming. It allows manual management by
          drag-and-dropping workers into any workstation. The animation speeds are fully customizable via an intuitive
          control panel.</p>
        <p>The production statistics are shown in the end as a bar chart.</p>
      </project-card>
    </li>
  </ul>
</template>