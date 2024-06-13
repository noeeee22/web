<script setup>
const spans = "text-neutral-500 text-lg flex flex-row items-center";
const hours = "text-neutral-500 text-lg flex flex-row";
const caption = "text-xl font-bold";
</script>
<template>
  <div class="flex justify-center items-center">
    <div class="flex flex-col gap-1 p-10">
      <div class="">
        <h1 :class="caption">Contactenos</h1>
        <span :class="spans"><i-ph-envelope-light />correo@gmail.com</span>
        <h1 :class="caption">Ubicacion</h1>
        <span :class="spans"
          ><i-material-symbols-light-location-on-outline />Moyobamba, SAM
          PE</span
        >
      </div>
      <div class="">
        <h1 :class="caption">Horario de Atención</h1>
        <div class="flex gap-9">
          <div class="flex flex-col" :class="hours">
            <span>Lunes</span>
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
            <span>8:00am - 1:00pm</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
