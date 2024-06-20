<script setup></script>

<template>
  <div class="flex justify-center items-center p-10">
    <div class="w-full bg-white">
      <form method="post" action="#">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-900" for="name"
            >Nombres</label
          >
          <input
            class="mt-1 p-2 w-full border rounded-2xl"
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
            class="mt-1 p-2 w-full border rounded-2xl"
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
            class="mt-1 p-2 w-full border rounded-2xl"
            rows="4"
            name="note"
            id="note"
          ></textarea>
        </div>
        <div class="flex justify-center">
          <button
            class="text-white bg-sky-500 px-4 py-2 font-bold rounded-3xl hover:bg-sky-600 w-full"
            type="submit"
          >
            Enviar Datos
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
