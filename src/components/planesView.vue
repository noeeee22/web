<script setup>
const props = defineProps({
  titulo: String,
  descripcion: String,
  precio: String,
});

const divPlanesClases =
  "max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2 bg-sky-100 border-none";
const textPlanClasses = "m-2 text-center mb-4 mt-5";
const planesClases = "flex items-center gap-2 mb-3 h-7 ";
const buttonPClasses =
  "cursor-pointer transition-all bg-sky-800 text-white px-6 py-2 rounded-lg border-sky-700 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]";

const PlanesCard = [
  {
    id: 0,
    nombre: "Emite facturas, boletas, y otros documentos.",
    icon: IconMaterialSymbolsFitbitCheckSmall,
    path: "/",
  },
  {
    id: 1,
    nombre: "Emite facturas, boletas, y otros documentos.",
    icon: IconMaterialSymbolsFitbitCheckSmall,
    path: "/",
  },
  {
    id: 2,
    nombre: "Emite facturas, boletas, y otros documentos.",
    icon: IconMaterialSymbolsFitbitCheckSmall,
    path: "/",
  },
  {
    id: 3,
    nombre: "Emite facturas, boletas, y otros documentos.",
    icon: IconMaterialSymbolsFitbitCheckSmall,
    path: "/",
  },
  {
    id: 4,
    nombre: "Emite facturas, boletas, y otros documentos.",
    icon: IconMaterialSymbolsFitbitCheckSmall,
    path: "/",
  },
  {
    id: 5,
    nombre: "Emite facturas, boletas, y otros documentos.",
    icon: IconMaterialSymbolsFitbitCheckSmall,
    path: "/",
  },
  {
    id: 6,
    nombre: "Emite facturas, boletas, y otros documentos.",
    icon: IconMaterialSymbolsFitbitCheckSmall,
    path: "/",
  },
];
</script>

<template>
  <div class="flex justify-center bg-">
    <div :class="divPlanesClases">
      <div :class="textPlanClasses">
        <h2 class="font-bold text-2xl mb-2">{{ titulo }}</h2>
        <p>{{ descripcion }}</p>
      </div>
      <h1 class="text-3xl text-center mb-4">{{ precio }}</h1>
      <div class="flex" v-for="data in PlanesCard" :key="data.id">
        <div class="flex gap-2 mx-5">
          <component :is="data.icon"></component>
          <li :class="planesClases">{{ data.nombre }}</li>
        </div>
      </div>
      <div class="flex items-center justify-center m-2 mb-4">
        <button :class="buttonPClasses">Seleccionar</button>
      </div>
    </div>
    <!-- class="m-5 p-7" -->
  </div>
</template>
