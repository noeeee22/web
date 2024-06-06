<script setup>
const spans = "text-neutral-500 text-lg flex flex-row items-center";
const hours = "text-neutral-500 text-lg flex flex-row";
const caption = "text-xl font-bold";
</script>
<template>
  <div class="flex flex-col justify-center mx-10 gap-1 p-6">
    <h1 :class="caption">Contactenos</h1>
    <span :class="spans"><i-ph-envelope-light />correo@gmail.com</span>
    <h1 :class="caption">Ubicacion</h1>
    <span :class="spans"
      ><i-material-symbols-light-location-on-outline />Moyobamba, SAM PE</span
    >
    <div class="">
      <h1 :class="caption">Horario de Atención</h1>
      <div class="flex gap-9 w-full">
        <div class="flex flex-col" :class="hours">
          <span>lunes</span>
          <span>Martes</span>
          <span>Miercoles</span>
          <span>Jueves</span>
          <span>Viernes</span>
          <span>Sabado</span>
        </div>
        <div class="flex flex-col" :class="hours">
          <span>8:00am - 6:00pm</span>
          <span>8:00am - 6:00pm</span>
          <span>8:00am - 6:00pm</span>
          <span>8:00am - 6:00pm</span>
          <span>8:00am - 6:00pm</span>
          <span>8:00am - 12:00pm</span>
        </div>
      </div>
    </div>
  </div>
</template>
