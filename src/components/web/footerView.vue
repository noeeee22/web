<script setup>
import tsi from "@/assets/prueba.png";
</script>
<template>
  <div
    class="flex flex-col md:flex-row justify-center bg-gradient-to-r from-azulblue-800 to-azulblue-900 h-auto md:h-60 text-white text-base p-5"
  >
    <div
      class="flex flex-col md:flex-row justify-center md:p-10 md:gap-40 w-full items-center md:items-start"
    >
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img :src="tsi" alt="" class="h-14 lg:h-24 md:h-14" />
      </div>
      <div class="flex flex-col md:flex-row md:gap-20 w-full md:w-auto">
        <div class="flex flex-col items-center md:items-start mb-5 md:mb-0">
          <h4 class="font-bold text-lg mb-3 ">Contacto</h4>
          <p>Dirección: Calle Falsa 123, Moyobamba, Perú</p>
          <p>Teléfono: 998 407 723</p>
          <p>Email: contacto@tsi.com</p>
        </div>
        <div class="flex flex-col items-center md:items-start mb-5 md:mb-0">
          <h4 class="font-bold text-lg mb-3">Enlaces</h4>
          <a href="/">Inicio</a>
          <a href="/">Sistemas</a>
          <a href="/">Servicios</a>
        </div>
        <div class="flex flex-col items-center md:items-center">
          <h4 class="font-bold text-lg mb-3">Redes</h4>
          <div class="flex gap-4 md:flex-col">
            <i-ri-whatsapp-fill class="size-7 hover:text-green-600" />
            <i-mdi-gmail class="size-7 hover:text-red-700" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
