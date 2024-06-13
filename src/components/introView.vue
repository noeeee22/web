<script setup>
import sist from "../assets/sist.jpg";
</script>
<template>
  <div
    class="flex flex-col md:flex-row gap-10 justify-center items-center p-6 mt-5"
  >
    <div class="md:w-1/2 lg:w-1/3 text-center md:text-left">
      <h3 class="text-lg font-semibold text-blue-600 mb-2">
        Especializados en Sistemas de Facturación
      </h3>
      <h1 class="text-3xl font-bold mb-4">
        Soluciones a la medida para tu negocio en Moyobamba
      </h1>
      <p class="text-gray-700 mb-4">
        TSI ofrece sistemas de facturación especializados para diversos
        comercios como restaurantes, librerías y farmacias en Moyobamba. Además,
        ofrecemos equipos de escritorio de alta calidad.
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
