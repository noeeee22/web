<script setup>
import tecnico from "@/assets/serviciot.png";
import facturacion from "@/assets/facturacion.png";
import productoss from "@/assets/producctoss.png";
</script>

<template>
  <!-- este archivo es servicios -->
  <div>
    <div class="flex gap-10 items-center justify-center flex-wrap my-1">
      <div class="w-60">
        <div class="p-2 m-1 flex justify-center">
          <img :src="facturacion" alt="" class="size-11" />
        </div>
        <div class="text-center items-center bg-white p-4 rounded-3xl">
          <h1 class="font-bold text-lg text-center">Facturación Electrónica</h1>
          <span class="flex-grow text-center text-base"
            >Soluciones de facturación digital</span
          >
        </div>
      </div>
      <div class="w-60">
        <div class="p-2 m-1 flex justify-center">
          <img :src="tecnico" alt="" class="size-11" />
          <!-- <i-ic-baseline-miscellaneous-services class="size-10 text-black" /> -->
        </div>
        <div class="text-center items-center">
          <h1 class="font-bold text-lg text-center">Servicio Técnico</h1>
          <span class="flex-grow text-center text-base"
            >Soporte técnico especializado</span
          >
        </div>
      </div>
      <div class="w-60">
        <div class="p-2 m-1 flex justify-center">
          <img :src="productoss" alt="" class="size-12" />
          <!-- <i-ph-desktop-tower-duotone class="size-10 text-black" /> -->
        </div>
        <div class="text-center items-center">
          <h1 class="font-bold text-lg text-center">Productos</h1>
          <span class="flex-grow text-center text-base"
            >Productos innovadores empresariales</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
