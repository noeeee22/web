<script setup>
import NavView from "@/components/NavView.vue";
import FooterView from "@/components/footerView.vue";

const icon1 = IconTdesignSystemCode;
</script>

<template>
  <div class="w-full">
    <NavView class="sticky" />
    <carouselView />
    <IntroView />
    <div>
      <div class="text-center text-blue-300 font-bold my-8 text-4xl">
        <h1>Servicios</h1>
      </div>
      <serviciosView />
    </div>

    <div class="md:m-10 bg-blue-100 md:p-14 rounded-3xl">
      <div class="text-center md:m-6 m-2">
        Ofrecemos soluciones integrales de facturación electrónica, incluyendo
        emisión, recepción y almacenamiento de facturas digitales, garantizando
        cumplimiento legal y eficiencia operativa.
      </div>
      <div class="container">
        <div></div>
        <pruebaView />
      </div>
    </div>

    <div id="eleccion">
      <div class="text-center text-blue-300 font-bold my-8 text-4xl">
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

    <h1 class="text-center text-blue-300 font-bold my-8 text-4xl" id="plan">
      Nuestros Planes
    </h1>
    <div class="">
      <planesView />
    </div>
    <div class="flex flex-wrap justify-center my-5 bg-sky-200 rounded-2xl m-10">
      <div
        class="flex flex-col md:flex-row justify-center w-full gap-4 items-stretch"
      >
        <div class="container w-full md:w-1/2 lg:w-1/4 flex flex-col">
          <TextForm class="h-full" />
        </div>
        <div class="container w-full md:w-1/2 lg:w-1/4 flex flex-col bg-white">
          <FormView class="h-full" />
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center my-5">
      <div
        class="flex flex-col md:flex-row justify-center w-full gap-4 items-stretch"
      >
        <div class="container w-full md:w-1/2 lg:w-1/4 flex flex-col">
          <HorarioView class="h-full" />
        </div>
        <div class="container w-full md:w-1/2 lg:w-1/4 flex flex-col">
          <GoogleMapLoader class="h-full" />
        </div>
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
    <FooterView />
  </div>
</template>
