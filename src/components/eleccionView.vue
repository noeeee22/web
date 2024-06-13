<script setup>
// const props = defineProps({
//   icon: Object,
//   titulo: String,
//   descripcion: String,
// });

// const icoClasses =
//   "text-slate-950 flex flex-col items-center justify-center text-5xl mb-3";
</script>

<template>
  <!-- <div
    class="p-4 flex flex-col items-center w-64 h-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <component :is="props.icon" :class="icoClasses" />
    <h2>{{ titulo }}</h2>
    <p>{{ descripcion }}</p>
  </div> -->
  <div class="flex flex-wrap items-center justify-center gap-8 md:gap-28">
    <div
      class="relative w-80 h-80 text-white text-opacity-0 hover:text-opacity-100 text-lg transition-all items-center"
    >
      <img
        src="https://img.freepik.com/vector-gratis/concepto-abstracto-centro-llamadas_335657-3001.jpg?w=826&t=st=1718054706~exp=1718055306~hmac=1990ea34719a7eb86ae7ef731318598b3bc29474885a5d9dca4b289672eea3eb"
        alt=""
        class="w-80 h-80 absolute inset-0 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 bg-indigo-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-lg"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Soporte Técnico Especializado
        </h1>
        <p class="title text-center p-2 text-base">
          Nuestro equipo de soporte técnico está siempre disponible para
          ayudarte con cualquier problema o consulta. Ofrecemos asistencia
          personalizada para asegurarnos de que tus sistemas funcionen sin
          problemas.
        </p>
      </div>
    </div>
    <div
      class="relative w-80 h-80 text-white text-opacity-0 hover:text-opacity-100 text-lg transition-all items-center"
    >
      <img
        src="https://img.freepik.com/vector-gratis/dispositivos-multiplataforma-conexion-multiplataforma-sincronizacion-gadgets-desarrollo-adaptativo-ordenador-portatil-tableta-smartphone-conectados_335657-260.jpg?w=826&t=st=1718056535~exp=1718057135~hmac=731b73fa06ac0ae8c2789a4ca6dcb8c108e0896b660cb30dc26d25d06ae13d25"
        alt=""
        class="w-80 h-80 absolute inset-0 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 bg-indigo-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-lg"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Innovación y Tecnología
        </h1>
        <p class="title text-center p-2 text-base">
          Nos mantenemos a la vanguardia de la tecnología, ofreciendo sistemas
          de facturación y equipos de escritorio que incorporan las últimas
          innovaciones para optimizar tus operaciones diarias.
        </p>
      </div>
    </div>
    <div
      class="relative w-80 h-80 text-white text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <img
        src="https://img.freepik.com/vector-gratis/implementacion-ideas-lanzamiento-startups-pensamiento-creativo-soluciones-innovadoras-empresaria-inversionista-gerente-que-inicia-proyecto-empresarial_335657-2400.jpg?w=826&t=st=1718052032~exp=1718052632~hmac=1a75fa3df8610110c6e9cf86cfff7fd93ebb32c38e5d4c3da5a7da09ec4434d3"
        alt=""
        class="w-80 h-80 absolute inset-0 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 bg-indigo-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-lg"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Soluciones Personalizadas
        </h1>
        <p class="title text-center p-2 text-base">
          Entendemos que cada negocio es único. Por eso, adaptamos nuestras
          soluciones de facturación y nuestros productos a las necesidades
          específicas de tu empresa, asegurando un ajuste perfecto.
        </p>
      </div>
    </div>
    <div
      class="relative w-80 h-80 text-white text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <img
        src="https://img.freepik.com/vector-gratis/planificacion-desarrollo-interfaz-sitio-web-equipo-devops-personajes-planos-trabajando-ui-ux-diseno-contenido-creacion-software-desarrollo-web_335657-228.jpg?w=826&t=st=1718054445~exp=1718055045~hmac=a5f29f168e97291a437cd3ea26d786f545a064c1b56596969d8de73c7e773e9d"
        alt=""
        class="w-80 h-80 absolute inset-0 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 bg-indigo-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-lg"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Experiencia y Confianza
        </h1>
        <p class="title text-center p-2 text-base">
          Con años de experiencia en el mercado, hemos ganado la confianza de
          numerosos clientes. Nuestro conocimiento profundo nos permite ofrecer
          soluciones eficaces y confiables.
        </p>
      </div>
    </div>
    <div
      class="relative w-80 h-80 text-white text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <img
        src="https://img.freepik.com/vector-gratis/calificacion-cinco-estrellas-evaluacion-calificacion-estimacion-excelente-revision-satisfaccion-cliente-servicio-puntaje-mas-alto-ilustracion-concepto-comentarios-cliente_335657-2037.jpg?w=826&t=st=1718052467~exp=1718053067~hmac=35392a2e3e97ec092df18b96249f405c927e0d51a76417488d4aa497e1536450"
        alt=""
        class="w-80 h-80 absolute inset-0 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 bg-indigo-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-lg"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Calidad Garantizada
        </h1>
        <p class="title text-center p-2 text-base">
          Nos comprometemos a ofrecer productos y servicios de la más alta
          calidad. Cada sistema de facturación y equipo de escritorio que
          ofrecemos pasa por rigurosos controles de calidad.
        </p>
      </div>
    </div>
    <div
      class="relative w-80 h-80 text-white text-opacity-0 hover:text-opacity-100 text-lg transition-all"
    >
      <img
        src="https://img.freepik.com/vector-gratis/linea-directa-centro-llamadas-atencion-al-cliente-linea-ayuda-online-resolucion-problemas-asistencia-remota-personaje-dibujos-animados-servicio-telefonico-cliente-asistente-ilustracion-metafora-concepto-aislado-vector_335657-2839.jpg?w=826&t=st=1718052667~exp=1718053267~hmac=e960cd4190a4fdab9a3e85baa1dc1e028331e4d3ead84ed3d793b0ce7a5adc38"
        alt=""
        class="w-80 h-80 absolute inset-0 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 bg-indigo-600 bg-opacity-0 hover:bg-opacity-100 transition duration-300 translate-y-6 hover:translate-y-0 flex flex-col justify-center items-center rounded-lg"
      >
        <h1 class="title text-center mb-2 font-bold text-xl">
          Atención al Cliente Excepcional
        </h1>
        <p class="title text-center p-2 text-base">
          Nuestro equipo de atención al cliente está dedicado a brindarte una
          experiencia de servicio excepcional. Estamos aquí para ayudarte en
          cada paso del camino, desde la consulta inicial hasta la
          implementación.
        </p>
      </div>
    </div>
  </div>
</template>
