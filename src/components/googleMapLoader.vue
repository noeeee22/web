<script setup>
import { GoogleMap, Marker } from "vue3-google-map";

const center = { lat: 40.689247, lng: -74.044502 };
const markerOptions = { position: center, label: "L", title: "LADY LIBERTY" };
</script>

<template>
  <div
    class="items-center md:flex flex-wrap justify-center m-1 md:items-center"
  >
    <GoogleMap
      api-key="AIzaSyDHRosYhTnVJTdnLTs-Qkn_O0oVY9zNVGM"
      style="width: 30%; height: 400px"
      :center="center"
      :zoom="15"
    >
      <Marker :options="markerOptions" />
    </GoogleMap>
  </div>
</template>
