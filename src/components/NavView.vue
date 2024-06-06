<script setup>
import { ref } from "vue";

const optionsMenu = [
  { name: "Home", path: "/" },
  {
    name: "Sistemas de Facturacion",

    path: "/gallery",
  },
  {
    name: "Servicio Tecnico",
    path: "/about",
  },
  { name: "Productos", path: "/about" },
];

// const iconClasses =
//   "h-6 w-6 text-slate-950 rounded-lg dark:text-amber-50 sm:block";
const menuItemClasses =
  "m-0.5 flex items-center rounded-lg text-slate-900 hover:bg-sky-700 p-2 text-xl hover:cursor-pointer min-h-[43px]";

const isDropdownOpen = ref(false);
</script>
<template>
  <div
    class="fixed top-0 left-0 w-full z-50 bg-zinc-800 shadow-md p-2 flex h-15 items-center"
  >
    <div class="flex items-center">
      <div
        v-for="option in optionsMenu"
        :key="option.name"
        :class="menuItemClasses + ' hidden sm:flex'"
      >
        <p class="hidden pl-1 text-white sm:block">
          {{ option.name }}
        </p>
      </div>
      <div class="flex sm:hidden">
        <div class="relative inline-block">
          <button @click="isDropdownOpen = !isDropdownOpen" class="rounded p-2">
            <i-mdi-dots-vertical />
          </button>
          <div
            v-if="isDropdownOpen"
            class="absolute left-0 z-10 mt-1 w-full min-w-max rounded-lg border"
          >
            <div
              v-for="option in optionsMenu"
              :key="option.name"
              class="flex cursor-pointer rounded-lg bg-slate-100 px-4 py-2 text-base text-gray-800 hover:bg-slate-200 dark:bg-slate-800 hover:dark:bg-gray-700"
            >
              <p class="pl-1 text-slate-950 dark:text-amber-50">
                {{ option.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
