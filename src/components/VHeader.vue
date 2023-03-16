<script lang="ts" setup>
import FelipeFlorEpicyles from "@/components/FelipeFlorEpicyles.vue"
import CanadaFlagSvg from "@/assets/canada-flag.svg?url"
import {ref} from "vue"
import SocialLink from "@/components/buttons/SocialLink.vue"

interface ISocialLink {
  icon: string;
  description: string;
  url: string;
}

const socialText = ref<string>("")
const socialLinks: ISocialLink[] = [
  {
    icon: "twitter",
    description: "Checkout my twitter!",
    url: "https://twitter.com/Felipe_R_Flor"
  },
  {
    icon: "email",
    description: "Want to send an email to me?",
    url: "mailto:hello@felipeflor.com"
  },
  {
    icon: "github",
    description: "A lot of my projects are open source!",
    url: "https://github.com/FRFlor"
  }
]
</script>

<template>
  <header class="bg-cover w-full bg-left h-112 relative">
    <div class="overflow-x-hidden h-112 relative overflow-hidden">
      <section
          class="links-section fade-in delay h-32 w-full max-w-lg z-20 absolute bottom-0 md:bottom-8">
        <div class="flex items-baseline justify-around">
          <social-link v-for="socialLink in socialLinks"
                       :key="socialLink.icon"
                       :description="socialLink.description"
                       :href="socialLink.url"
                       :icon="socialLink.icon"
                       @blur="socialText = ''"
                       @focus="description => socialText = description"
                       @hover-end="socialText = ''"
                       @hover-start="description => socialText = description"/>
        </div>
        <p
            class="row-start-3 col-span-6 xl:col-span-3 flex items-baseline justify-center text-xl text-blue-200 pt-6 max-w-lg text-center"
            v-text="socialText"/>
      </section>
      <section class="name-section md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <FelipeFlorEpicyles class="slow-fade-in "/>
        <span class="software-developer absolute top-60 left-5 fade-in flex items-center">
          <p class="text-2xl xl:text-3xl text-blue-100 mr-6">Software Developer</p>
          <img :src="CanadaFlagSvg" alt="Flag of Canada" class="h-4 w-6 mt-1">
       </span>
      </section>
    </div>
    <div aria-hidden="true" class="header-fade-out"/>
  </header>
</template>

<style scoped>
.header-fade-out {
  --size-of-fade: 4rem;

  background: linear-gradient(
      0deg,
      var(--middle-background-colour) 0,
      var(--middle-background-colour-transparent) var(--size-of-fade)
  );
  height: var(--size-of-fade);
  width: 100%;
  position: absolute;
  bottom: 0;
}

header {
  background-image: url("https://res.cloudinary.com/felipeflor/image/upload/c_crop,g_east,h_3168,w_3651/c_scale,w_2000/v1595101853/felipeflor.com/cookie-the-pom-gySMaocSdqs-unsplash.jpg");
  background-color: hsl(185, 40%, 25%);
  background-blend-mode: overlay;
}

.slow-fade-in {
  opacity: 0;
  animation: fade-in 3s forwards ease-in;
}

.fade-in {
  opacity: 0;
  animation: fade-in 2s forwards;
}

.delay {
  animation-delay: 500ms;
}

.clip-path {
  clip-path: polygon(0 0, 100% 0, 100% 20%, 100% 90%, 80% 100%, 20% 100%, 0% 90%, 0% 20%);
}

@media screen('md') {
  .clip-path {
    clip-path: polygon(0 0, 100% 0%, 85% 100%, 0 100%);
  }
}

@media screen('2xl') {
  .clip-path {
    clip-path: polygon(0 0, 100% 0%, 90% 100%, 0 100%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
