<script setup>
import sist from "../assets/sist.jpg";
</script>
<template>
  <div
    class="flex flex-col md:flex-row gap-10 justify-center items-center p-6 mt-5"
  >
    <div class="md:w-1/2 lg:w-1/3 text-center md:text-left">
      <h3 class="text-lg font-semibold text-azulblue-200 mb-2">
        Especializados en Sistemas de Facturación
      </h3>
      <h1 class="text-4xl font-bold mb-4">
        Soluciones a la medida para tu negocio
      </h1>
      <!-- todo el peru - SAn Martin y las demas regiones -->
      <p class="text-gray-700 mb-4 text-lg">
        TSI ofrece sistemas de facturación especializados para diversos
        comercios como restaurantes, librerías y farmacias en San Martín y las
        demás regiones del país. Además, ofrecemos equipos de escritorio de
        calidad para tu negocio.
      </p>
    </div>
    <div class="md:w-1/2 lg:w-1/3">
      <img
        class="w-full h-auto rounded-lg"
        :src="sist"
        alt="Imagen representativa"
      />
    </div>
  </div>
</template>
