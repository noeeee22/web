<script setup>
import { ref } from "vue";
import navbar from "@/components/menu/navbar.vue";
import panel from "@/components/panelprincipal/panel.vue";
import prueba2 from "@/components/modules/tickets/prueba2.vue";


</script>

<template>
  <div class="w-full h-screen">
    <navbar class="sticky top-0 right-0" />
    <div class="w-full flex-1 overflow-auto">
      <div class="m-2 p-2">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </div>
    </div>  
  </div>
</template>
<style>
::-webkit-scrollbar {
  display: none;
}
</style>
