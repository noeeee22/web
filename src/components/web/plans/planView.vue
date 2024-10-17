<script setup>
const props = defineProps({
  ico: String,
  titulo: String,
  precio: String,
  descripcion: String,
});

const buttonPClasses =
  "cursor-pointer transition-all w-full bg-gradient-to-r from-azulblue-600 to-azulblue-800 text-white px-6 py-1.5 my-3 mx-4 rounded-3xl border-sky-700 hover:brightness-110 active:brightness-90 text-base font-medium";

// const ico = [
//   {
//     ico: IconMaterialSymbolsWorkspacePremiumRounded,
//   },
// ];

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
    <div class="max-w-sm border rounded-3xl shadow-xl gap-3">
      <div class="text-center">
        <div class="bg-gradient-to-tr from-azulblue-20 to-azulblue-80 rounded-t-3xl p-4">
          <div class="flex items-center justify-center">
            <h2 class="font-medium text-xl ml-3">{{ titulo }}</h2>
            <!-- <component
            :is="props?.ico"
            class="text-azulblue-90 text-3xl"
            ></component> -->
          </div>
          <div class="flex items-baseline justify-center mx-6 gap-3">
            <p class="text-4xl my-1 font-bold text-sky-950">
              {{ precio }}
            </p>
            <span class="text-sky-950 font-medium text-base">Mensual</span>
          </div>
        </div>
        <div class="bg-gradient-to-r from-azulblue-10 to-azulblue-20 mb-3">
          <h1
            class="max-w-sm flex justify-center text-center mx-6 py-5 text-base font-medium"
          >
            {{ descripcion }}
          </h1>
        </div>
      </div>
      <div class="flex" v-for="data in PlanesCard" :key="data.id">
        <div class="flex gap-1.5 mx-5 md:py-1">
          <component
            :is="data.icon"
            class="text-azulblue-500 text-xl items-baseline"
          ></component>
          <li class="flex text-base">
            {{ data.nombre }}
          </li>
        </div>
      </div>
      <div class="flex items-center justify-center m-2 mb-4">
        <button :class="buttonPClasses">Seleccionar</button>
      </div>
    </div>
  </div>
</template>
