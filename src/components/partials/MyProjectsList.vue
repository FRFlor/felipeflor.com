<script lang="ts" setup>
import ProjectCard from "@/components/ProjectCard.vue"

function getVideoUrl(name: string, extension: string, gravity: string = "north_west") {
  return `https://res.cloudinary.com/felipeflor/video/upload/c_fill,g_${gravity},h_500,w_500/v1579327020/felipeflor.com/${name}.${extension}`
}
</script>

<template>
  <ul class="mt-6 lg:mt-14 flex justify-around xl:justify-start xl:gap-x-6 gap-y-6 flex-wrap">
    <li>
      <project-card :chips="['WebGL', 'BabylonJS', 'Typescript']"
                    :video-poster="getVideoUrl('space-game', 'webp', 'north')"
                    :video-source="getVideoUrl('space-game', 'webm', 'north')"
                    source-code-url="https://github.com/FRFlor/WebGL-Spaceship"
                    title="Not enough space!"
                    website-url="https://space-game.felipeflor.com/"
                    year="2020"
      >
        <p>A simple 3D space game.</p>
        <p>The player is in control of a spaceship inside a tunnel filled with debris.</p>
        <p>Can you dodge the space junk and reach the end of the tunnel ?</p>
        <p>Or will your aircraft become part of the debris?</p>
      </project-card>
    </li>

    <li>
      <project-card :chips="['GoogleMaps API', 'GeoLocation API', 'StreetView', 'Vue2', 'Typescript', 'Laravel']"
                    :video-poster="getVideoUrl('dangerous-signs', 'webp')"
                    :video-source="getVideoUrl('dangerous-signs', 'webm')"
                    source-code-url="https://github.com/FRFlor/dangerous-signs"
                    title="Dangerous Signs"
                    website-url="https://dangerous-signs.felipeflor.com/"
                    year="2020"
      >
        <p>An Open Data project!</p>
        <p>What is the most dangerous STOP sign in the city of Kitchener, Ontario?</p>
        <p>To answer this question I make use of Kitchener's Open data database to combine the information of traffic
          collisions and stop signs locations, putting it all together into a neatly organized interactive map.</p>
      </project-card>
    </li>

    <li>
      <project-card :chips="['Canvas', 'Algorithms']"
                    title="Game of Life"
                    year="2019"
                    :video-poster="getVideoUrl('game-of-life', 'webp')"
                    :video-source="getVideoUrl('game-of-life', 'webm')"
                    source-code-url="https://github.com/FRFlor/game-of-life"
                    website-url="https://game-of-life.felipeflor.com/"
      >
        <p>Conway's Game of Life</p>
        <p>A simulation of simple life forms that can either reproduce, die or remain.</p>
        <p>I also added a small control panel where the user can change the Frames-per-second and size of grid.</p>
      </project-card>
    </li>

    <li>
      <project-card :chips="['Breadth First Search', 'Graph Theory', 'Vue2', 'Typescript', 'Mocha', 'Vue Test Utils']"
                    title="Cat Mouse"
                    year="2019"
                    :video-poster="getVideoUrl('catmouse', 'webp')"
                    :video-source="getVideoUrl('catmouse', 'webm')"
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
                    year="2019"
                    :video-poster="getVideoUrl('balloonStory', 'webp')"
                    :video-source="getVideoUrl('balloonStory', 'webm')"
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
                    :video-poster="getVideoUrl('musicgame', 'webp')"
                    :video-source="getVideoUrl('musicgame', 'webm')"
                    year="2019"
                    source-code-url="https://github.com/FRFlor/music-game"
                    website-url="https://musicgame.felipeflor.com/"
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
                    :video-poster="getVideoUrl('MobExperiment', 'webp')"
                    :video-source="getVideoUrl('MobExperiment', 'webm')"
                    source-code-url="https://github.com/FRFlor/mob-programming-experience"
                    title="Mob Programming"
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