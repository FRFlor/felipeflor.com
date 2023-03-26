<template>
  <div aria-hidden="true" class="opacity-30 pointer-events-none">
    <div aria-hidden="true" class="animated-background-top"></div>
    <div aria-hidden="true" class="animated-background-bottom"></div>
  </div>

</template>

<style lang="scss" scoped>
/** credits: https://codepen.io/hylobates-lar/pen/bGEQXgm */

@mixin dots($count) {
  $text-shadow: ();
  @for $i from 0 through $count {
    $text-shadow: $text-shadow,
    (-.5+(random()) * 3) + em (-.5+(random()) * 3) + em 7px hsla(random() * 360, 100%, 50%, .9);
  }
  text-shadow: $text-shadow;
}

.animated-background-bottom, .animated-background-top {
  display: block;
  font-size: 52px;
  color: transparent;
}

.animated-background-top::before, .animated-background-top::after,
.animated-background-bottom::before, .animated-background-bottom::after {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 3em;
  height: 3em;
  content: '.';
  mix-blend-mode: screen;
  animation: 44s -27s move infinite ease-in-out alternate;
}


.animated-background-bottom::before {
  @include dots(40);
  animation-duration: 44s;
  animation-delay: -27s;
}

.animated-background-bottom::after {
  @include dots(40);
  animation-duration: 43s;
  animation-delay: -32s;
}

.animated-background-top::before {
  @include dots(40);
  animation-duration: 42s;
  animation-delay: -23s;
}

.animated-background-top::after {
  @include dots(40);
  animation-duration: 41s;
  animation-delay: -19s;
}


@keyframes move {
  from {
    transform: rotate(0deg) scale(12) translateX(-20px);
  }
  to {
    transform: rotate(360deg) scale(18) translateX(20px);
  }
}
</style>