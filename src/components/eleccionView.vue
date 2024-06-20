<script setup>
const styleIcon =
  "w-80 h-64 absolute inset-0 object-cover rounded-lg text-black flex justify-center items-center flex-col gap-5";
</script>

<template>
  <div
    class="flex flex-wrap mx-10 w-full items-center justify-center gap-8 md:w-2/2 md:gap-x-28 mb-6 md:mb-8"
  >
    <div
      class="relative w-80 h-64 text-white bg-sky-100 rounded-3xl text-opacity-0 hover:text-opacity-100 text-lg transition-all items-center"
    >
      <div :class="styleIcon">
        <i-streamline-call-center-support-service-solid class="size-20" />
        <span class="font-medium hover:opacity-10"
          >Soporte Técnico Especializado</span
        >
      </div>
      <!-- <img
        src="https://img.freepik.com/vector-gratis/concepto-abstracto-centro-llamadas_335657-3001.jpg?w=826&t=st=1718054706~exp=1718055306~hmac=1990ea34719a7eb86ae7ef731318598b3bc29474885a5d9dca4b289672eea3eb"
        alt=""
        class="w-80 h-54 absolute inset-0 object-cover rounded-lg"
      /> -->
      <div
        class="absolute inset-0 bg-sky-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-3xl"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Soporte Técnico Especializado
        </h1>
        <p class="title text-center p-2 text-base mx-3">
          Nuestro equipo de soporte técnico está siempre disponible para
          ayudarte con cualquier problema o consulta. Ofrecemos asistencia
          personalizada para asegurarnos de que tus sistemas funcionen sin
          problemas.
        </p>
      </div>
    </div>
    <div
      class="relative w-80 h-64 text-white bg-sky-100 rounded-3xl text-opacity-0 hover:text-opacity-100 text-lg transition-all items-center"
    >
      <div :class="styleIcon">
        <i-streamline-ai-technology-spark-solid class="size-20" />
        <span class="font-medium">Innovación y Tecnología</span>
      </div>
      <div
        class="absolute inset-0 bg-sky-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-3xl"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Innovación y Tecnología
        </h1>
        <p class="title text-center p-2 text-base mx-3">
          Nos mantenemos a la vanguardia de la tecnología, ofreciendo sistemas
          de facturación y equipos de escritorio que incorporan las últimas
          innovaciones para optimizar tus operaciones diarias.
        </p>
      </div>
    </div>
    <div
      class="relative w-80 h-64 text-white bg-sky-100 rounded-3xl text-opacity-0 hover:text-opacity-100 text-lg transition-all items-center"
    >
      <div :class="styleIcon">
        <i-material-symbols-dashboard-customize-rounded class="size-20" />
        <span class="font-medium"> Soluciones Personalizadas</span>
      </div>
      <div
        class="absolute inset-0 bg-sky-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-3xl"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Soluciones Personalizadas
        </h1>
        <p class="title text-center p-2 text-base mx-3">
          Entendemos que cada negocio es único. Por eso, adaptamos nuestras
          soluciones de facturación y nuestros productos a las necesidades
          específicas de tu empresa, asegurando un ajuste perfecto.
        </p>
      </div>
    </div>
    <div
      class="relative w-80 h-64 text-white bg-sky-100 rounded-3xl text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <div :class="styleIcon">
        <i-fluent-handshake-24-filled class="size-20" />
        <span class="font-medium"> Experiencia y Confianza</span>
      </div>
      <div
        class="absolute inset-0 bg-sky-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-3xl"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Experiencia y Confianza
        </h1>
        <p class="title text-center p-2 text-base mx-3">
          Con años de experiencia en el mercado, hemos ganado la confianza de
          numerosos clientes. Nuestro conocimiento profundo nos permite ofrecer
          soluciones eficaces y confiables.
        </p>
      </div>
    </div>
    <div
      class="relative w-80 h-64 text-white bg-sky-100 rounded-3xl text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <div :class="styleIcon">
        <i-ion-desktop class="size-20" />
        <span class="font-medium"> Calidad Garantizada</span>
      </div>
      <div
        class="absolute inset-0 bg-sky-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-3xl"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Calidad Garantizada
        </h1>
        <p class="title text-center p-2 text-base mx-3">
          Nos comprometemos a ofrecer productos y servicios de la más alta
          calidad. Cada sistema de facturación y equipo de escritorio que
          ofrecemos pasa por rigurosos controles de calidad.
        </p>
      </div>
    </div>
    <div
      class="relative w-80 h-64 text-white bg-sky-100 rounded-3xl text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <div :class="styleIcon">
        <i-solar-hand-stars-bold class="size-20" />
        <span class="font-medium"> Atención al Cliente Excepcional</span>
      </div>
      <div
        class="absolute inset-0 bg-sky-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-3xl"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Atención al Cliente Excepcional
        </h1>
        <p class="title text-center p-2 text-base mx-3">
          Nuestro equipo de atención al cliente está dedicado a brindarte una
          experiencia de servicio excepcional. Estamos aquí para ayudarte en
          cada paso del camino, desde la consulta inicial hasta la
          implementación.
        </p>
      </div>
    </div>
  </div>
</template>
