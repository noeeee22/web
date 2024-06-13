<script setup>
const cardService =
  "ease-in-out duration-300 hover:shadow-lg hover:shadow-lg transform hover:-translate-y-1 hover:scale-110 rounded-lg bg-zinc-300 p-8 w-64 h-72 text-center flex flex-col items-center justify-center";
const styleIcon = "p-3 m-1 rounded-lg mb-4";
</script>
<template>
  <div class="flex justify-center">
    <transition :duration="500" mode="in-out">
      <div
        class="flex gap-20 md:gap-60 w-full items-center justify-center flex-wrap my-2"
      >
        <div :class="cardService">
          <div :class="styleIcon">
            <i-ic-twotone-install-desktop class="size-10" />
          </div>
          <h1 class="font-bold text-lg mb-2">Facturación Electrónica</h1>
          <p class="flex-grow">
            Conoce nuestros diversos Sistemas de Facturación
          </p>
        </div>

        <div :class="cardService">
          <div :class="styleIcon">
            <i-ic-baseline-miscellaneous-services class="size-10" />
          </div>
          <h1 class="font-bold text-lg mb-2">Servicio Técnico</h1>
          <p class="flex-grow">
            Conoce nuestros diversos Sistemas de Facturación
          </p>
        </div>

        <div :class="cardService">
          <div :class="styleIcon">
            <i-ph-desktop-tower-duotone class="size-10" />
          </div>
          <h1 class="font-bold text-lg mb-2">Productos</h1>
          <p class="flex-grow">Equipos de escritorio y mucho más</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.size-10 {
  font-size: 2.5rem;
}
</style>
