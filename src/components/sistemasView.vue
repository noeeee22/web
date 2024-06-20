<script setup>
import zenda from "../assets/zenda.png";
import zendapharma from "../assets/zendapharma.png";
import flizzy from "../assets/flizzy2.png";
import zendatours from "../assets/zendatours.png";
import laboratorioClinico from "../assets/laboratorioClinico.png";
</script>

<template>
  <div class="m-3 space-y-10">
    <div
      class="md:flex justify-center gap-10 md:mx-40 bg-sky-100 bg-opacity-80 rounded-3xl items-center p-5 md:p-7 shadow-lg"
    >
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img :src="zenda" class="rounded-3xl md:h-80 shadow-lg" alt="Zenda" />
      </div>
      <div
        class="text-center md:text-left flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0"
      >
        <h1 class="font-bold text-3xl mb-4 text-sky-500">Zenda</h1>
        <p class="text-lg">
          Podrás pedir ayuda en tiempo real, formarte con los tutoriales de
          nuestra academia y asesorarte con nuestros expertos.
        </p>
        <div class="mt-5 w-60">
          <button
            class="text-white bg-sky-500 px-4 py-2 font-bold rounded-3xl hover:bg-sky-600 w-full"
            type="button"
          >
            Conocer más
          </button>
        </div>
      </div>
    </div>

    <div
      class="md:flex justify-center gap-10 md:mx-40 bg-indigo-100 bg-opacity-80 rounded-3xl items-center p-5 md:p-7 shadow-lg"
    >
      <div
        class="text-center md:text-left flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0"
      >
        <h1 class="font-bold text-3xl mb-4 text-indigo-500">Zendapharma</h1>
        <p class="text-lg">
          Podrás pedir ayuda en tiempo real, formarte con los tutoriales de
          nuestra academia y asesorarte con nuestros expertos.
        </p>
        <div class="mt-5 w-60">
          <button
            class="text-white bg-indigo-500 px-4 py-2 font-bold rounded-3xl hover:bg-indigo-600 w-full"
            type="button"
          >
            Conocer más
          </button>
        </div>
      </div>
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img
          :src="zendapharma"
          class="rounded-3xl md:h-80 shadow-lg"
          alt="Zendapharma"
        />
      </div>
    </div>

    <div
      class="md:flex justify-center gap-10 md:mx-40 bg-orange-50 bg-opacity-80 rounded-3xl items-center p-5 md:p-7 shadow-lg"
    >
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img :src="flizzy" class="rounded-3xl md:h-80 shadow-lg" alt="Flizzy" />
      </div>
      <div
        class="text-center md:text-left flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0"
      >
        <h1 class="font-bold text-3xl mb-4 text-orange-500">Flizzy</h1>
        <p class="text-lg">
          Podrás pedir ayuda en tiempo real, formarte con los tutoriales de
          nuestra academia y asesorarte con nuestros expertos.
        </p>
        <div class="mt-5 w-60">
          <button
            class="text-white bg-orange-500 px-4 py-2 font-bold rounded-3xl hover:bg-orange-600 w-full"
            type="button"
          >
            Conocer más
          </button>
        </div>
      </div>
    </div>

    <div
      class="md:flex justify-center gap-10 md:mx-40 bg-yellow-100 bg-opacity-80 rounded-3xl items-center p-5 md:p-7 shadow-lg"
    >
      <div
        class="text-center md:text-left flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0"
      >
        <h1 class="font-bold text-3xl mb-4 text-yellow-500">Zendatours</h1>
        <p class="text-lg">
          Podrás pedir ayuda en tiempo real, formarte con los tutoriales de
          nuestra academia y asesorarte con nuestros expertos.
        </p>
        <div class="mt-5 w-60">
          <button
            class="text-white bg-yellow-500 px-4 py-2 font-bold rounded-3xl hover:bg-yellow-600 w-full"
            type="button"
          >
            Conocer más
          </button>
        </div>
      </div>
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img
          :src="zendatours"
          class="rounded-3xl md:h-80 shadow-lg"
          alt="Zendatours"
        />
      </div>
    </div>

    <div
      class="md:flex justify-center gap-10 md:mx-40 bg-green-100 bg-opacity-80 rounded-3xl items-center p-5 md:p-7 shadow-lg"
    >
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img
          :src="laboratorioClinico"
          class="rounded-3xl md:h-80 shadow-lg"
          alt="Laboratorio Clinico"
        />
      </div>
      <div
        class="text-center md:text-left flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0"
      >
        <h1 class="font-bold text-3xl mb-4 text-green-500">
          Sistema de Laboratorio Clínico
        </h1>
        <p class="text-lg">
          Podrás pedir ayuda en tiempo real, formarte con los tutoriales de
          nuestra academia y asesorarte con nuestros expertos.
        </p>
        <div class="mt-5 w-60">
          <button
            class="text-white bg-green-500 px-4 py-2 font-bold rounded-3xl hover:bg-green-600 w-full"
            type="button"
          >
            Conocer más
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
