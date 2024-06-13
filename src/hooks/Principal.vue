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
      <div class="text-center text-blue-300 font-bold my-8 text-4xl">
        <h1>Servicios</h1>
      </div>
      <serviciosView />
    </div>

    <div>
      <div>
        <h1 class="text-center text-blue-300 font-bold my-8 text-4xl">
          ¿Por qué elegirnos?
        </h1>
      </div>
    </div>
    <div class="items-center flex justify-center">
      <div class="container">
        <div class="flex justify-center gap-10">
          <eleccion-view></eleccion-view>
        </div>
      </div>
    </div>

    <h1 class="text-center text-blue-300 font-bold my-8 text-4xl">
      Nuestros Planes
    </h1>
    <div class="">
      <planesView />
    </div>
    <div
      class="flex flex-wrap justify-center my-5 bg-indigo-200 rounded-lg m-10"
    >
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

    <FooterView />
  </div>
</template>
