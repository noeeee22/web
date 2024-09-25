<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const pizza = ref();
</script>

<template>
  <div class="w-full h-screen flex overflow-hidden">
    <div class="w-full md:w-1/2 h-full flex flex-col justify-center self-center p-5">
      <div class="flex flex-col justify-center self-center ">
        <div class="flex flex-col mb-3">
          <span class="text-3xl font-bold">¡Bienvenido!</span>
          <span class="text-base">Ingresa tus credenciales para acceder</span>
        </div>
        <div class="flex flex-col justify-center gap-8 mt-10 mb-4">
          <FloatLabel>
            <InputText id="username" class="w-96" />
            <label for="username">Usuario</label>
          </FloatLabel>
          <FloatLabel>
            <Password inputClass="w-96" promptLabel="none" />
            <label for="password">Password</label>
          </FloatLabel>
        </div>
        <div class="flex gap-2 my-3">
          <Checkbox inputId="ingredient1" name="pizza" value="Cheese" v-model="pizza" />
          <label for="ingredient1" class="ml-2 text-sm">Recordarme Contraseña</label>
        </div>
        <div class="flex self-center my-2">
          <Button label="Ingresar" class="w-96 shadow-md" style="background-color:#41c3f7; border-color: #41c3f7;" />
        </div>
      </div>
      <!-- <div class="flex gap-6 items-center justify-center my-7">
        <Button label="Inicia sesión con Google" icon="pi pi-google" />
        <Button label="Inicia sesión con Apple" icon="pi pi-apple" />
      </div> -->
    </div>
    <div class="hidden md:block md:w-1/2 h-full">
      <img
        src="https://img3.wallspic.com/crops/1/2/2/0/4/140221/140221-agapornis-ave-budgericar-guacamayo-pico-3840x2160.jpg"
        alt="" class="w-full h-full object-cover">
    </div>


  </div>
</template>
