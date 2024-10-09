<script setup>
const cardService =
  "ease-in-out duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 rounded-3xl bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 w-64 h-64 text-center flex flex-col items-center justify-center shadow-md";
const styleIcon = "p-3 m-1 rounded-lg mb-4 bg-white bg-opacity-20";
</script>

<template>
  <div class="flex justify-center">
    <transition :duration="500" mode="in-out">
      <div
        class="flex gap-10 md:gap-20 w-full items-center justify-center flex-wrap my-2"
      >
        <div :class="cardService">
          <div :class="styleIcon">
            <i-ic-twotone-install-desktop class="size-10" />
          </div>
          <h1 class="font-bold text-lg">Facturación Electrónica</h1>
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
  color: #fff;
}
</style>
