<script setup></script>

<template>
  <div
    class="flex mx-10 gap-10 items-center md:flex flex-wrap justify-center m-1 md:items-center p-6"
  >
    <div class="md:w-1/2 lg:w-1/4 text-center md:text-left items-center">
      <h1 class="font-bold text-4xl mb-4">Solicite asistencia personalizada</h1>
      <p class="text-lg">
        Contáctenos hoy para obtener orientación experta sobre nuestros sistemas
        de facturación y equipos de escritorio. Permítanos ayudarle a encontrar
        las soluciones adecuadas para las necesidades de su negocio.
      </p>
    </div>

    <div class="w-full md:w-1/2 lg:w-1/4">
      <form method="post" action="#">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-900" for="name"
            >Nombres</label
          >
          <input
            class="mt-1 p-2 w-full border rounded-md"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-900" for="email"
            >Correo Electrónico</label
          >
          <input
            class="mt-1 p-2 w-full border rounded-md"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <!-- <div class="mb-4">
          <label
            for="service"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Seleccione un Servicio</label
          >
          <select
            id="service"
            name="service"
            class="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Seleccione un Servicio</option>
            <option value="facturacion">Sistemas de Facturación</option>
            <option value="tecnico">Servicio Técnico</option>
            <option value="productos">Productos</option>
          </select>
        </div> -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-900" for="note"
            >Nota</label
          >
          <textarea
            class="mt-1 p-2 w-full border rounded-md"
            rows="4"
            name="note"
            id="note"
          ></textarea>
        </div>
        <div class="flex justify-center">
          <button
            class="text-white bg-sky-500 px-4 py-2 font-bold rounded-md hover:bg-sky-600 w-full"
            type="submit"
          >
            Enviar Datos
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
