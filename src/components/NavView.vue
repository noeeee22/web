<script setup>
import { ref } from "vue";
import tsi2 from "../assets/tsi2.png";
import { useMessage } from "naive-ui";

const handleClick = (option) => {
  if (option.command) {
    window.location.href = option.command;
  } else {
    console.log("xd");
  }
};

const optionsMenu = [
  {
    label: "Nuestros Sistemas",
    key: "systems",
    command: "#servicios",
  },
  {
    label: "Servicios",
    key: "serviciosView.vue",
  },
  { label: "Porque Elegirnos", key: "choice", command: "#eleccion" },
  {
    label: "Planes",
    key: "plans",
    command: "#plan",
  },
  {
    label: "Contactenos",
    key: "Contact",
    command: "#tetas",
  },
  {
    label: "Consulta CPE",
    key: "consult",
  },
];
// const iconClasses =
// "h-6 w-6 text-slate-950 rounded-lg dark:text-amber-50 sm:block";
const menuItemClasses =
  "m-0.5 flex items-center p-2 text-xl hover:cursor-pointer min-h-[43px] ";

const isDropdownOpen = ref(false);
</script>
<template>
  <div
    class="top-0 left-0 w-full z-50 bg-white shadow-md p-2 flex h-15 items-center justify-evenly"
  >
    <div class="flex items-center ml-4">
      <img :src="tsi2" alt="Logo" class="h-10 w-auto hover:scale-110" />
    </div>
    <div class="flex items-center space-x-5 mr-4">
      <div class="hidden sm:flex space-x-5">
        <div
          v-for="option in optionsMenu"
          :key="option.label"
          :class="menuItemClasses"
          @click="handleClick(option)"
        >
          <p class="pl-1 text-sky-950 hover:font-semibold text-xl">
            {{ option.label }}
          </p>
        </div>
      </div>
      <div class="flex sm:hidden">
        <n-dropdown :options="optionsMenu" placement="b"
          ><button
            @click="isDropdownOpen = !isDropdownOpen"
            class="rounded p-2"
          >
            <i-mdi-dots-vertical />
          </button>
        </n-dropdown>
      </div>
    </div>
  </div>
</template>
