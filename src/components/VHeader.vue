<template>
  <header class="bg-cover w-full bg-left">
    <div class="container mx-auto overflow-x-hidden w-full h-full relative overflow-hidden">
      <section
          class="links-section fade-in delay h-32 w-full max-w-lg z-20">
        <div class="flex items-baseline justify-around">
          <social-link v-for="socialLink in socialLinks"
                       :key="socialLink.icon"
                       :description="socialLink.description"
                       :href="socialLink.url"
                       :icon="socialLink.icon"
                       @blur="socialText=''"
                       @focus="description => socialText = description"
                       @hover-end="socialText = ''"
                       @hover-start="description => socialText = description"/>
        </div>
        <p
            class="row-start-3 col-span-6 xl:col-span-3 flex items-baseline justify-center text-xl text-blue-200 pt-6 max-w-lg text-center"
            v-text="socialText"/>
      </section>
      <section class="name-section">
        <FelipeFlorEpicyles class="slow-fade-in "/>
        <span class="software-developer fade-in flex items-center">
          <p class="text-2xl xl:text-3xl text-blue-100 mr-6">Software Developer</p>
          <svg-canada-flag class="h-4 w-6 mt-1"/>
       </span>
      </section>
    </div>

  </header>
</template>

<script lang="ts" setup>
import SvgCanadaFlag from "@/components/SvgCanadaFlag.vue"
import FelipeFlorEpicyles from "@/components/FelipeFlorEpicyles.vue"
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
    icon: "fab fa-twitter",
    description: "Checkout my twitter!",
    url: "https://twitter.com/Felipe_R_Flor"
  },
  {
    icon: "fas fa-envelope",
    description: "Want to send an email to me?",
    url: "mailto:hello@felipeflor.com"
  },
  {
    icon: "fab fa-github-alt",
    description: "A lot of my projects are open source!",
    url: "https://github.com/FRFlor"
  }
]
</script>

<style scoped>
header {
  background-image: url("https://res.cloudinary.com/felipeflor/image/upload/c_crop,g_east,h_3168,w_3651/c_scale,w_2000/v1595101853/felipeflor.com/cookie-the-pom-gySMaocSdqs-unsplash.jpg");
  background-color: hsl(185, 40%, 25%);
  background-blend-mode: overlay;
  clip-path: polygon(0 0, 100% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
  height: min(100vh, 35rem);
}

@media (min-width: 768px) {
  header {
    clip-path: polygon(0 0, 100% 0%, 85% 100%, 0 100%);
  }
}

@media (min-width: 2000px) {
  header {
    clip-path: polygon(0 0, 100% 0%, 90% 100%, 0 100%);
  }
}

.name-section {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.software-developer {
  position: absolute;
  top: 250px;
  left: 25px;
}

.links-section {
  position: absolute;
  bottom: 65px;
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
