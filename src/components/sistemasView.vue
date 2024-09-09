<script setup>
import zenda from "../assets/zenda.png";
import zendapharma from "../assets/zendapharma.png";
import flizzy from "../assets/flizzy2.png";
import zendatours from "../assets/zendatours.png";
import laboratorioClinico from "../assets/laboratorioClinico.png";
</script>

<template>
  <div class="m-3 space-y-10 md:px-20 px-3 flex-wrap mx-10">
    <div
      class="md:flex justify-center gap-10 bg-sky-100 bg-opacity-80 rounded-3xl items-center p-5 md:p-7 shadow-lg"
    >
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img :src="zenda" class="rounded-3xl md:h-80 shadow-lg" alt="Zenda" />
      </div>
      <div
        class="text-center md:text-left flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0"
      >
        <h1 class="font-bold text-3xl mb-4 text-sky-500">Zenda</h1>
        <p class="text-lg">
          Un sistema para el servicio total de facturación y ventas para
          diversos tipos de comercios, mejorando procesos como inventarios,
          ventas y atención al cliente.
        </p>
      </div>
    </div>

    <div
      class="md:flex justify-center gap-10 bg-indigo-100 bg-opacity-80 rounded-3xl items-center p-5 md:p-7 shadow-lg flex-row-reverse"
    >
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img
          :src="zendapharma"
          class="rounded-3xl md:h-80 shadow-lg"
          alt="Zendapharma"
        />
      </div>
      <div
        class="text-center md:text-left flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0"
      >
        <h1 class="font-bold text-3xl mb-4 text-indigo-500">Zendapharma</h1>
        <p class="text-lg">
          Esta creado especialmente para farmacias, este sistema ayuda a
          administrar el stock de medicamentos, las ventas, el control de
          prescripciones y las relaciones con proveedores.
        </p>
      </div>
    </div>

    <div
      class="md:flex justify-center gap-10 bg-orange-50 bg-opacity-80 rounded-3xl items-center p-5 md:p-7 shadow-lg"
    >
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img :src="flizzy" class="rounded-3xl md:h-80 shadow-lg" alt="Flizzy" />
      </div>
      <div
        class="text-center md:text-left flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0"
      >
        <h1 class="font-bold text-3xl mb-4 text-orange-500">Flizzy</h1>
        <p class="text-lg">
          Es un sistema de facturación dirigida a restaurantes dando un servicio
          adecuado para pedidos, mesas y pagos
        </p>
      </div>
    </div>

    <div
      class="md:flex justify-center gap-10 bg-yellow-100 bg-opacity-80 rounded-3xl items-center p-5 md:p-7 shadow-lg flex-row-reverse"
    >
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img
          :src="zendatours"
          class="rounded-3xl md:h-80 shadow-lg"
          alt="Zendatours"
        />
      </div>
      <div
        class="text-center md:text-left flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0"
      >
        <h1 class="font-bold text-3xl mb-4 text-yellow-500">Zendatours</h1>
        <p class="text-lg">
          Sistema orientado a agencias de transportes, que facilita el control
          emisión de boletas y facturas electrónicas
        </p>
      </div>
    </div>

    <div
      class="md:flex justify-center gap-10 bg-green-100 bg-opacity-80 rounded-3xl items-center p-5 md:p-7 shadow-lg"
    >
      <div class="flex justify-center md:justify-start mb-5 md:mb-0">
        <img
          :src="laboratorioClinico"
          class="rounded-3xl lg:h-80 md:h-80 shadow-lg"
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
          Un software hecho para laboratorios clínicos, con funciones dedicada a
          administrar la entrada de muestras, análisis, generación de informes y
          facturación, mejorando la atención a pacientes y el control de
          resultados.
        </p>
        <!-- <div class="mt-5 w-60">
          <button
            class="text-white bg-green-500 px-4 py-2 font-bold rounded-3xl hover:bg-green-600 w-full"
            type="button"
          >
            Conocer más
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>
