<script setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";
import Badge from "primevue/badge";
import Avatar from "primevue/avatar";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import logo from "@/assets/tsi2.png";
import 'primeicons/primeicons.css'


// Definir íconos con el nombre de la clase
const items = ref([
  {
    label: "Home",
    key: "home",
    icon: "pi pi-home",
  },
  {
    label: "Tikets",
    key: "features",
    icon: "pi pi-ticket",
  },
  {
    label: "Ajustes",
    key: "contact",
    icon: "pi pi-cog",
  },

]);
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <img :src="logo" alt="Logo" class="w-20 mr-3" />
      </template>

      <!-- Personalización de cada elemento -->
      <template #item="{ item, props, root }">
        <a class="flex items-center" v-bind="props.action">
          <!-- Ícono del item -->
          <span :class="item.icon"></span>
          <!-- Label del item -->
          <span class="ml-2">{{ item.label }}</span>

          <!-- Badge -->
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        </a>
      </template>

      <template #end>
        <div class="flex items-center gap-6">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText placeholder="Search" />
          </IconField>
          <Avatar image="https://i.pinimg.com/736x/9d/e6/64/9de6644331722c67e77da2b289bb20ea.jpg" shape="circle"
            class="mr-2" />
        </div>
      </template>
    </Menubar>
  </div>
</template>
