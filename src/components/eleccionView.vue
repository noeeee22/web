<script setup>
const props = defineProps({
  icon: Object,
  titulo: String,
  descripcion: String,
});

const icoClasses =
  "text-slate-950 flex flex-col items-center justify-center text-5xl mb-3";
</script>

<template>
  <!-- <div
    class="p-4 flex flex-col items-center w-64 h-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <component :is="props.icon" :class="icoClasses" />
    <h2>{{ titulo }}</h2>
    <p>{{ descripcion }}</p>
  </div> -->
  <div class="flex justify-center gap-10 rounded-lg">
    <div
      class="container relative mt-8 w-80 h-80 text-white text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <img
        src="https://www.ikusi.com/es/wp-content/uploads/sites/2/2023/04/innovacion-digital.jpeg"
        alt=""
        class="w-80 h-80 absolute inset-0 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 bg-sky-900 bg-opacity-0 hover:bg-opacity-50 transition-all duration-500 flex flex-col justify-center items-center rounded-lg"
      >
        <h1 class="title text-center mb-2 font-bold">
          Innovación y Tecnología
        </h1>
        <p class="title text-center p-2">
          Nos mantenemos a la vanguardia de la tecnología, ofreciendo sistemas
          de facturación y equipos de escritorio que incorporan las últimas
          innovaciones para optimizar tus operaciones diarias.
        </p>
      </div>
    </div>
    <div
      class="container relative mt-8 w-80 h-80 text-white text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <img
        src="https://www.mi-computadora.net/wp-content/uploads/2019/08/soporte-remoto-324x299.jpg"
        alt=""
        class="w-80 h-80 absolute inset-0 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 bg-sky-900 bg-opacity-0 hover:bg-opacity-50 transition-all duration-500 flex flex-col justify-center items-center rounded-lg"
      >
        <h1 class="title text-center mb-2 font-bold">
          Soporte Técnico Especializado
        </h1>
        <p class="title text-center p-2">
          Nuestro equipo de soporte técnico está siempre disponible para
          ayudarte con cualquier problema o consulta. Ofrecemos asistencia
          personalizada para asegurarnos de que tus sistemas funcionen sin
          problemas.
        </p>
      </div>
    </div>
    <div
      class="container relative mt-8 w-80 h-80 text-white text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <img
        src="https://www.mi-computadora.net/wp-content/uploads/2019/08/soporte-remoto-324x299.jpg"
        alt=""
        class="w-80 h-80 absolute inset-0 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 bg-sky-900 bg-opacity-0 hover:bg-opacity-50 transition-all duration-500 flex flex-col justify-center items-center rounded-lg"
      >
        <h1 class="title text-center mb-2 font-bold">
          Soluciones Personalizadas
        </h1>
        <p class="title text-center p-2">
          Entendemos que cada negocio es único. Por eso, adaptamos nuestras
          soluciones de facturación y nuestros productos a las necesidades
          específicas de tu empresa, asegurando un ajuste perfecto.
        </p>
      </div>
    </div>
    <div
      class="container relative mt-8 w-80 h-80 text-white text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <img
        src="https://www.danielcolombo.com/wp-content/uploads/2020/05/confianza-empresarial-manos-vector-dibujo-daniel-colombo.png"
        alt=""
        class="w-80 h-80 absolute inset-0 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 bg-sky-900 bg-opacity-0 hover:bg-opacity-50 transition-all duration-500 flex flex-col justify-center items-center rounded-lg"
      >
        <h1 class="title text-center mb-2 font-bold">
          Experiencia y Confianza
        </h1>
        <p class="title text-center p-2">
          Con años de experiencia en el mercado, hemos ganado la confianza de
          numerosos clientes. Nuestro conocimiento profundo nos permite ofrecer
          soluciones eficaces y confiables.
        </p>
      </div>
    </div>
  </div>
</template>
