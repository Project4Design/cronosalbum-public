<script setup>
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL;
const instagramText = import.meta.env.VITE_INSTAGRAM_TEXT;
const facebookUrl = import.meta.env.VITE_FACEBOOK_URL;
const facebookText = import.meta.env.VITE_FACEBOOK_TEXT;
const tiktokUrl = import.meta.env.VITE_TIKTOK_URL;
const tiktokText = import.meta.env.VITE_TIKTOK_TEXT;
</script>

<template>
  <div>
    <div
      class="relative bg-gradient-to-b from-cronos-light to-cronos-darker p-4 pt-14 lg:p-10 lg:pb-5 lg:pt-20 diviver-v-top-down"
    >
      <div class="max-w-8xl flex flex-col lg:flex-row justify-between">
        <div
          class="basis-1/2 flex flex-col sm:flex-row items-center justify-center order-2 lg:order-1 mt-7 lg:mt-0"
        >
          <img
            class="max-w-[200px] h-auto transition-all duration-500 opacity-80 hover:opacity-100 sm:border-r-2 border-white sm:pr-5 mb-7 sm:mb-0"
            src="/images/isotipo-white.png"
            alt="Logo"
          />
          <div class="sm:pl-5">
            <h3 class="text-white text-2xl font-bold mb-2 lg:mb-5">Redes sociales</h3>
            <ul class="list-none">
              <li class="mb-2">
                <a
                  class="transition-colors duration-300 text-white text-xl cursor-pointer hover:text-yellow-500"
                  :href="instagramUrl"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <FontAwesomeIcon class="mr-2" :icon="faInstagram" />
                  {{ instagramText }}
                </a>
              </li>
              <li class="mb-2">
                <a
                  class="transition-colors duration-300 text-white text-xl cursor-pointer hover:text-yellow-500"
                  :href="facebookUrl"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <FontAwesomeIcon class="mr-2" :icon="faFacebook" />
                  {{ facebookText }}
                </a>
              </li>
              <li class="mb-2">
                <a
                  class="transition-colors duration-300 text-white text-xl cursor-pointer hover:text-yellow-500"
                  :href="tiktokUrl"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <FontAwesomeIcon class="mr-2" :icon="faTiktok" />
                  {{ tiktokText }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="relative basis-1/2 text-white font-semibold text-center flex flex-col items-center justify-center order-1 lg:order-2"
        >
          <img class="opacity-50 w-16 self-start mb-3" src="/images/quotes.png" alt="Quotes" />
          <p class="mb-5 z-10 hover:text-yellow-500 transition-colors duration-300">
            Gracias a la pasión por el deporte y despertar al niño que vive en nuestros corazones
            nos motivamos a emprender este maravilloso proyecto con el anhelo de crear recuerdos
            juntos. Brindando experiencias cada vez mas novedosas e innovadoras al alcance de todos
            garantizando momentos de satisfacción.
          </p>
          <p
            class="text-2xl scale-90 hover:text-yellow-500 hover:scale-100 transition-all duration-500"
          >
            Cronos se enorgullece de crear recuerdos contigo.
          </p>
        </div>
      </div>
    </div>
    <div id="credits-container" class="bg-cronos-darker">
      <div class="max-w-8xl mx-auto flex justify-center items-center p-4 opacity-90 gap-3 row-">
        <p id="developed-by" class="text-white font-arabic duration-300">Desarrollado por</p>
        <a
          id="p4d-logo"
          class="max-w-[180px] transition-all duration-300"
          href="https://project4design"
          target="_blank"
        >
          <img src="/images/project4design.png" alt="Logo Project 4 Design" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#credits-container:hover #p4d-logo {
  transform: translate(-50%, -0.5rem) scaleX(1.2) scaleY(1.2);
}
#credits-container:hover #developed-by {
  opacity: 0;
}
.diviver-v-top-down {
  overflow: hidden;
  position: relative;
}
.diviver-v-top-down::before {
  content: '';
  position: absolute;
  z-index: 3;
  pointer-events: none;
  background-repeat: no-repeat;
  bottom: -0.1vw;
  left: -0.1vw;
  right: -0.1vw;
  top: -0.1vw;
  background-size: 100% 50px;
  background-position: 50% 0%;
  background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 773.74 154.98"><g fill="%23ffffff"><path d="M0 0h773.74L386.87 77.5Z"/><path d="m0 0 386.87 154.98L773.74 0Z" opacity=".66"/></g></svg>');
}

@media (min-width: 2100px) {
  .diviver-v-top-down::before {
    background-size: 100% calc(2vw + 50px);
  }
}
</style>
