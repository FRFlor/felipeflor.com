<script lang="ts" setup>
import ControlButton from "@/components/buttons/ControlButton.vue"
import {onBeforeUnmount, onMounted, ref} from "vue"
import FelipeFlorAnimation from "@/classes/epicycle-animations/FelipeFlor"


const canvas = ref<HTMLCanvasElement>()
const felipeFlorAnimation = ref<FelipeFlorAnimation>()

onMounted(() => {
  felipeFlorAnimation.value = new FelipeFlorAnimation(canvas.value!)
  felipeFlorAnimation.value?.startAnimation(true)
})

onBeforeUnmount(() => felipeFlorAnimation.value?.stopAnimation())

function onMediaButtonPressed() {
  if (!felipeFlorAnimation.value) {
    return
  }

  if (felipeFlorAnimation.value.isPlaying) {
    felipeFlorAnimation.value.stopAnimation()
  } else {
    felipeFlorAnimation.value.startAnimation(true)
  }
}


</script>

<template>
  <div>
    <h1>
      <span class="sr-only">Felipe Flor</span>
      <canvas ref="canvas"
              aria-hidden="true"
              class="pointer-events-none z-10"
              height="800"
              width="1200"/>

    </h1>
    <control-button :icon="`fas ${felipeFlorAnimation?.isPlaying ? 'fa-pause' : 'fa-play'}`"
                    class="controls z-0"
                    @click="onMediaButtonPressed"/>
  </div>
</template>

<style scoped>
canvas {
  transform: scaleY(-0.65) scaleX(0.65);
  position: absolute;
  top: -315px;
  left: -475px;
  right: unset;
}

.controls {
  position: absolute;
  left: 30px;
  right: unset;
  top: 165px;
}

@media (min-width: 1024px) {
  canvas {
    transform: scaleY(-1) scaleX(1);
    top: -245px;
    left: unset;
    right: -250px;
  }

  .controls {
    position: absolute;
    left: unset;
    top: 380px;
    right: 85px;
  }
}
</style>
