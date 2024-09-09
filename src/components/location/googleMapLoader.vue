<script setup>
import { GoogleMap, Marker } from "vue3-google-map";

const center = { lat: -6.030192, lng: -76.976841 };
const markerOptions = {
  position: center,
  label: "Tsi",
  title: "TECNOLOGIAS PARA SOLUCIONES INTELIGENTES",
};
</script>

<template>
  <div class="items-center md:flex flex-wrap justify-center m-1 p-10">
    <GoogleMap
      api-key="AIzaSyDHRosYhTnVJTdnLTs-Qkn_O0oVY9zNVGM"
      style="width: 100%; height: 400px"
      :center="center"
      :zoom="15"
    >
      <Marker :options="markerOptions" />
    </GoogleMap>
  </div>

  <!-- <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.6157512893367!2d-76.97752757195326!3d-6.030554858388717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b73b1b3bfdfa7f%3A0x8ce15847102c8c82!2sEmilio%20Acosta%20431%2C%20Moyobamba%2022001%2C%20Per%C3%BA!5e0!3m2!1ses!2sus!4v1718057717159!5m2!1ses!2sus"
    width="400"
    height="400"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe> -->
</template>
