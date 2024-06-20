<script setup>
import tsi from "../assets/tsi.png";
</script>
<template>
  <div class="bg-sky-700 h-60 text-white text-base">
    <div class="flex flex-row p-10 gap-10 justify-evenly">
      <div>
        <img :src="tsi" alt="" class="h-20" />
      </div>
      <div class="flex flex-col">
        <h4 class="font-bold text-lg mb-3">Contacto</h4>
        <p>Dirección: Calle Falsa 123, Ciudad, País</p>
        <p>Teléfono: +123 456 7890</p>
        <p>Email: contacto@tuempresa.com</p>
      </div>
      <div class="flex flex-col">
        <h4 class="font-bold text-lg mb-3">Enlaces</h4>
        <a href="/">Inicio</a>
        <a href="/">Productos</a>
        <a href="/">Servicios</a>
      </div>
      <div>
        <h4 class="font-bold text-lg mb-3">Redes</h4>
        <div class="flex flex-col items-center my-2">
          <i-ri-whatsapp-fill class="size-7 hover:" />
          <i-mdi-gmail class="size-7" />
        </div>
      </div>
    </div>
  </div>
</template>
