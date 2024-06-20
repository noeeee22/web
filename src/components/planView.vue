<script setup>
const props = defineProps({
  titulo: String,
  precio: String,
  descripcion: String,
});

const planesClases = "flex items-center h-7 ";
const buttonPClasses =
  "cursor-pointer transition-all w-full bg-sky-500 text-white px-6 py-2 my-3 mx-3 rounded-3xl border-sky-700 hover:brightness-110 active:brightness-90 ";

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
  <div class="flex justify-center">
    <div class="max-w-sm border rounded-3xl shadow-xl">
      <div class="text-center">
        <h2 class="font-medium text-xl my-3">{{ titulo }}</h2>
        <p class="text-4xl my-1 font-bold text-sky-950">
          {{ precio }}
        </p>
        <span class="text-sky-950 font-medium text-lg">Mensual</span>
        <h1 class="max-w-sm flex justify-center text-center mx-6 my-4">
          {{ descripcion }}
        </h1>
      </div>
      <div class="flex" v-for="data in PlanesCard" :key="data.id">
        <div class="flex gap-3 mx-5 items-center my-1">
          <component :is="data.icon" class=""></component>
          <li :class="planesClases">{{ data.nombre }}</li>
        </div>
      </div>
      <div class="flex items-center justify-center m-2 mb-4">
        <button :class="buttonPClasses">Seleccionar</button>
      </div>
    </div>
  </div>
</template>
