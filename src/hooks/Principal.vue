<script setup>
import NavView from "@/components/NavView.vue";
import FooterView from "@/components/footerView.vue";

const icon1 = IconTdesignSystemCode;
const icon2 = IconPhCpuBold;

const icone1 = IconMingcuteToyHorseLine;
const icone2 = IconIconParkOutlineDuck;
const icone3 = IconLucideBird;
const icone4 = IconMdiPiggyBankOutline;
</script>

<template>
  <div class="w-full">
    <NavView class="sticky" />
    <carouselView />
    <IntroView />
    <div>
      <div class="text-center text-blue-300 font-bold mt-20 text-4xl">
        <h1>Servicios</h1>
      </div>
      <serviciosView />
    </div>

    <div>
      <div>
        <h1 class="text-center text-blue-300 font-bold mt-20 text-4xl">
          ¿Por qué elegirnos?
        </h1>
      </div>

      <eleccion-view></eleccion-view>

      <!-- <div class="flex justify-center flex-wrap gap-20 my-20">
        <eleccion-view
          :icon="icone1"
          titulo="Innovación y Tecnología"
          descripcion="Nos mantenemos a la vanguardia de la tecnología, ofreciendo sistemas de facturación y equipos de escritorio que incorporan las últimas innovaciones para optimizar tus operaciones diarias.
"
        />
        <eleccion-view
          :icon="icone2"
          titulo="Soporte Técnico Especializado"
          descripcion="Nuestro equipo de soporte técnico está siempre disponible para ayudarte con cualquier problema o consulta. Ofrecemos asistencia personalizada para asegurarnos de que tus sistemas funcionen sin problemas.
"
        />
        <eleccion-view
          :icon="icone3"
          titulo="Soluciones Personalizadas"
          descripcion="Entendemos que cada negocio es único. Por eso, adaptamos nuestras soluciones de facturación y nuestros productos a las necesidades específicas de tu empresa, asegurando un ajuste perfecto.
"
        />
        <eleccion-view
          :icon="icone4"
          titulo="Experiencia y Confianza"
          descripcion="Con años de experiencia en el mercado, hemos ganado la confianza de numerosos clientes. Nuestro conocimiento profundo nos permite ofrecer soluciones eficaces y confiables.
"
        />
      </div> -->
    </div>

    <div class="md:flex flex-wrap justify-center m-1">
      <FormView />
    </div>
    <div class="md:flex flex-wrap justify-center m-1">
      <googleMapLoader />
      <horario-view />
    </div>
    <FooterView />
  </div>
</template>
