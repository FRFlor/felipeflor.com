<script lang="ts" setup>
import {IComplexNumber, ICoordinates} from "@/types"
import {CircleChain} from "@/classes/CircleChain"
import {CanvasWrapper} from "@/classes/CanvasWrapper"
import FELIPE_POINTS_RAW from "@/points/Felipe.json"
import FLOR_POINTS_RAW from "@/points/Flor.json"
import ControlButton from "@/components/buttons/ControlButton.vue"
import {onBeforeUnmount, onMounted, ref} from "vue"


const FELIPE_POINTS = FELIPE_POINTS_RAW.map((point: ICoordinates) => {
  return {
    x: point.x * 1.2 - 185,
    y: point.y * 1.2 - 90
  }
})

const FLOR_POINTS = FLOR_POINTS_RAW.map((point: ICoordinates) => {
  return {
    x: point.x * 1.2 - 160,
    y: point.y * 1.2 - 90
  }
})

const nameShiftInCanvas: ICoordinates = {
  x: 625,
  y: 235
}

const felipeShiftInCanvas: ICoordinates = {
  x: nameShiftInCanvas.x,
  y: 150 + nameShiftInCanvas.y
}

const florShiftInCanvas: ICoordinates = {
  x: 150 + nameShiftInCanvas.x,
  y: nameShiftInCanvas.y
}

const FPS: number = 30
const frequencyRange = 130
const animationSpeed: number = 0.025

const interval = ref<ReturnType<typeof setTimeout> | null>(null)
const _felipeChain = ref<CircleChain | null>(null)
const _florChain = ref<CircleChain | null>(null)
const _canvasWrapper = ref<CanvasWrapper | null>(null)
const canvas = ref<HTMLCanvasElement>()

onMounted(() => {
  _canvasWrapper.value = new CanvasWrapper(canvas.value as HTMLCanvasElement)
  calculateCircleChains()
  startAnimation(true)
})

onBeforeUnmount(stopAnimation)

function onMediaButtonPressed() {
  if (interval.value) {
    stopAnimation()
  } else {
    startAnimation(true)
  }
}

function stopAnimation() {
  if (!interval.value) {
    return
  }
  clearInterval(interval.value)
  interval.value = null
}

function startAnimation(shouldLoop: boolean = true) {
  _florChain.value!.onEdgeDrawsFull = shouldLoop ? () => null : stopAnimation
  _felipeChain.value!.onEdgeDrawsFull = shouldLoop ? () => null : stopAnimation

  if (interval.value) {
    return
  }

  interval.value = setInterval(() => {
    _canvasWrapper.value?.clear()

    if (!_felipeChain.value || !_florChain.value) {
      return
    }

    _felipeChain.value.update()
    _felipeChain.value.render()
    _florChain.value.update()
    _florChain.value.render()
  }, 1000 / FPS)
}

function calculateCircleChains() {
  _felipeChain.value = getCircleChain(FELIPE_POINTS, {
    x: felipeShiftInCanvas.x,
    y: felipeShiftInCanvas.y
  }, animationSpeed)
  _florChain.value = getCircleChain(FLOR_POINTS, {
    x: florShiftInCanvas.x,
    y: florShiftInCanvas.y
  }, -animationSpeed)
}

function frequencyBucketK(k: number, points: ICoordinates[]): IComplexNumber {
  const xk = {
    real: 0,
    imaginary: 0
  }

  const N = points.length
  for (let n = 0; n < N; n++) {
    const {x, y} = points[n]
    const c = 2 * Math.PI * k * n / N

    xk.real += x * Math.cos(c) + y * Math.sin(c)
    xk.imaginary += y * Math.cos(c) - x * Math.sin(c)
  }

  xk.real /= N
  xk.imaginary /= N
  return xk
}

function getCircleChain(points: ICoordinates[], origin: ICoordinates = {x: 0, y: 0}, animationMultiplier: number = 1) {
  const radii = []
  const phases = []
  const angularSpeeds = []

  for (let f = -frequencyRange; f <= frequencyRange; f++) {
    const {real, imaginary} = frequencyBucketK(f, points)
    radii.push(Math.sqrt(real ** 2 + imaginary ** 2))
    phases.push(Math.atan2(imaginary, real))
    angularSpeeds.push(f * animationMultiplier)
  }

  let canvasWrapper = _canvasWrapper.value as CanvasWrapper
  return new CircleChain(canvasWrapper, origin.x, origin.y, radii, phases, angularSpeeds)
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
    <control-button :icon="`fas ${interval ? 'fa-pause' : 'fa-play'}`"
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
