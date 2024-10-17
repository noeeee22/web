<script setup>
import { ref } from "vue";
import NavView from "@/components/web/NavView.vue";
import FooterView from "@/components/web/footerView.vue";
import Button from "primevue/button";

const isChatOpen = ref(false);

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;
};
</script>

<template>
  <div class="w-full">
    <n-scrollbar style="max-height: 1220px">
      <NavView class="sticky" />
      <carouselView />
      <IntroView />

      <div>
        <!-- Botón flotante -->
        <button
          @click="toggleChat"
          class="fixed bottom-4 right-4 bg-azulblue-300 hover:bg-azulblue-600 text-white p-4 rounded-full shadow-lg  focus:outline-none"
        >
          💬
        </button>

        <!-- Ventana del chatbot -->
        <div
          v-if="isChatOpen"
          class="fixed bottom-16 right-4 bg-gray-200 border rounded-lg p-4 shadow-lg w-72"
        >
          <h3 class="text-lg font-semibold mb-2">Chatbot</h3>
          <p>¡Hola! ¿En qué puedo ayudarte?</p>
          <!-- Aquí puedes integrar el componente o iframe del chatbot -->
        </div>
      </div>

      <div class="flex justify-center items-center" id="servicios">
        <div class="container">
          <h1 class="text-center text-blue-300 font-bold my-8 text-4xl">
            Nuestros Sistemas
          </h1>
          <SistemasView />
        </div>
      </div>

      <!-- <div class="flex justify-center items-center flex-wrap mx-10">
        <div class="container">
          <div
            class="my-10 m-3 md:m-10 bg-gray-200 p-6 md:p-7 rounded-3xl"
            id="servicios"
          >
            <div class="text-center text-black p-2 font-bold text-4xl">
              Servicios
            </div>
            <div class="text-center md:m-6 m-2 text-lg font-normal">
              Ofrecemos soluciones integrales de facturación electrónica,
              incluyendo emisión, recepción y almacenamiento de facturas
              digitales, garantizando cumplimiento legal y eficiencia operativa.
            </div>
            <div class="">
              <div class="m-5">
                <pruebaView />
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div id="eleccion">
        <div class="text-center text-azulblue-400 font-bold my-8 text-4xl">
          ¿Por qué elegirnos?
        </div>
        <div class="items-center flex justify-center">
          <div class="container">
            <div class="flex justify-center">
              <eleccion-view />
            </div>
          </div>
        </div>
      </div>
      <h1
        class="text-center text-azulblue-400 font-bold my-8 text-4xl"
        id="plan"
      >
        Nuestros Planes
      </h1>
      <div class="">
        <planesView />
      </div>


      <!-- formulario insecesario -->
      <!-- <div
        class="flex flex-wrap justify-center my-5 bg-azulblue-500 rounded-3xl m-10"
      >
        <div
          class="flex flex-col md:flex-row justify-center w-full gap-4 items-center"
        >
          <div
            class="container w-full md:w-1/2 lg:w-1/4 flex flex-col items-center"
          >
            <TextForm class="h-full" />
          </div>
          <div
            class="container w-full md:w-1/2 lg:w-1/4 flex flex-col bg-white rounded-3xl"
          >
            <FormView class="h-full" />
          </div>
        </div>
      </div> -->
      <div class="flex flex-wrap justify-center my-5">
        <div
          class="flex flex-col lg:flex-row md:flex-col justify-center w-full gap-1 items-center"
        >
          <div class="container w-full md:w-1/2 lg:w-1/4 flex flex-col">
            <HorarioView class="h-full" />
          </div>
          <div class="container w-full md:w-1/2 lg:w-1/4 flex flex-col">
            <GoogleMapLoader class="h-full" />
          </div>
        </div>
      </div>

      <div class="">
        <FooterView />
      </div>
    </n-scrollbar>
  </div>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
html {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}
</style>
