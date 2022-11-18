<script setup>
import { ref, onMounted } from 'vue';
import { setContainer, init, animate, onMouseMove } from '@/utils/space';

const spaceContainer = ref(null);
const spaceElement = ref(null);

onMounted(() => {
  setTimeout(() => {
    setContainer(spaceElement.value);
    init();
    animate();
    spaceContainer.value.addEventListener('mousemove', onMouseMove);
  }, 500);
});
</script>

<template>
  <div
    ref="spaceContainer"
    class="relative px-4 py-10 lg:p-12 lg:py-24 divisor-curved-top z-10 -mt-14"
  >
    <div
      class="absolute inset-0 bg-cover bg-bottom"
      style="background-image: url(/images/stadium.jpg)"
    ></div>
    <div ref="spaceElement" class="absolute inset-0 opacity-60"></div>
    <div class="relative flex flex-col-reverse lg:flex-row justify-center max-w-8xl mx-auto z-10">
      <div class="basis-full lg:basis-1/2 flex justify-center pt-10 lg:pt-0">
        <img
          class="max-w-auto lg:max-w-lg opacity-80 shadow shadow-white"
          src="/images/cronos-team.png"
          alt="Equipo cronos"
        />
      </div>
      <div class="basis-full lg:basis-1/2">
        <h2
          class="text-5xl lg:text-6xl text-center font-arabic drop-shadow-cronos-lg text-yellow-500 opacity-80 mb-5"
        >
          11 Ideal
        </h2>
        <div class="text-center text-white">
          <p class="mb-3 text-2xl font-bold">¿Has soñado con armar tu propio equipo?</p>
          <p class="mb-3">
            ¿Cuál fue tu jugador favorito en la niñez? ¿Te imaginas a Cristiano y al Capitán América
            en un mismo equipo?<br />
          </p>
          <p class="mb-3">
            Tus jugadores... Tu equipo... Tú también puedes ser parte de tu equipo (O hasta tu
            mascota)
          </p>
          <p class="text-center text-2xl mb-3">¡100% personalizable y 1.000% divertido!</p>
          <p class="text-center">
            Realizamos tu 11 ideal
            <strong class="text-yellow-500">¡TOTALMENTE GRATIS!</strong> al completar tu álbum
            Cronos.
          </p>
          <p class="text-center text-2xl my-5">¿Quiénes irían en tu equipo soñado?</p>
          <p class="text-sm border-t pt-2">
            Si no has completado tu álbum pero igual quieres armar tu equipo soñado, no te
            preocupes, por tan solo $8 podrás tener tu 11 ideal.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.divisor-curved-top {
  position: relative;
  clip-path: ellipse(160% 50% at 50% 50%);
}

@media (min-width: 1024px) {
  .divisor-curved-top {
    clip-path: ellipse(110% 50% at 50% 50%);
  }
}
</style>
