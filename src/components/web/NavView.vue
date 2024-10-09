<script setup>
import { ref } from "vue";
import tsi2 from "@/assets/tsi2.png";

const handleClick = (option) => {
  if (option.command) {
    window.location.href = option.command;
  } else if (option.key === "whatsapp") {
    window.open("https://wa.me/+51998407723", "_blank"); //WhatsApp
  } else if (option.key === "login") {
    window.location.href = "/login"; // login
  } else {
    console.log("No command provided");
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
    key: "servicios",
    command: "#servicios",
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
  {
    label: "WhatsApp",
    key: "whatsapp",
  },
  {
    label: "",
    key: "login",
  },
];

const menuItemClasses =
  "relative m-0.5 flex items-center p-2 text-xl cursor-pointer min-h-[43px]";
const isDropdownOpen = ref(false);
</script>

<template>
  <div
    class="top-0 left-0 w-full z-50 bg-white shadow-md p-2 flex h-15 items-center justify-between md:justify-evenly flex-row-reverse md:flex-row"
  >
    <div class="flex items-center mr-5 md:ml-4">
      <img :src="tsi2" alt="Logo" class="h-10 w-auto hover:scale-110" />
    </div>
    <div class="flex items-center space-x-5 mr-4">
      <div class="hidden sm:flex space-x-5">
        <div
          v-for="option in optionsMenu"
          :key="option.key"
          :class="menuItemClasses"
          @click="handleClick(option)"
        >
          <template v-if="option.key !== 'whatsapp'">
            <p
              class="pl-1 text-sky-950 hover:font-semibold text-xl hover:text-sky-700 relative group"
            >
              {{ option.label }}
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-700 transition-all duration-300 group-hover:w-full"
              ></span>
            </p>
          </template>
          <template v-else>
            <i-ic-baseline-whatsapp
              class="w-8 h-8 text-green-500 hover:text-green-700 transition duration-300"
            ></i-ic-baseline-whatsapp>
          </template>

          <template v-if="option.key === 'login'">
            <i-material-symbols-light-person
              class="w-9 h-9 text-ski-800 hover:text-sky-700 transition duration-300"
            ></i-material-symbols-light-person>
          </template>
        </div>
      </div>
      <div class="flex sm:hidden">
        <n-dropdown
          trigger="click"
          :options="optionsMenu"
          @select="(_, xd) => handleClick(xd)"
        >
          <button @click="isDropdownOpen = !isDropdownOpen" class="rounded p-2">
            <i-mdi-dots-vertical />
          </button>
        </n-dropdown>
      </div>
    </div>
  </div>
</template>

<style>
.group:hover .group-hover\:w-full {
  width: 100%;
}
</style>