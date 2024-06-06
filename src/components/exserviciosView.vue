<!-- <script setup>
const props = defineProps({
  icon: Object,
  titulo: String,
  descripcion: String,
});
const MisionClases = "flex justify-center flex-wrap text-center p-2 ";
const iconClasses = "text-slate-950 flex justify-center size-10";
</script>

<template>
  <div :class="MisionClases">
    <component :is="props.icon" :class="iconClasses" />
    <h2 class="font-semibold text-center text-xl py-2">{{ titulo }}</h2>
    <p>{{ descripcion }}</p>
  </div>




  <transition :duration="500" mode="in-out">
      <div
        class="flex gap-20 w-full items-center justify-center flex-wrap mt-10 my-20"
      >
        <n-card
          title="Facturacion Electronica"
          class="ease-in-out duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-110"
        >
          <template #cover>
            <img
              src="https://www.quesito.pe/tienda/images/paquete-c1-png-251b1742-45ed-4351-bcaf-7326e43ea66c.jpeg?size=mini"
            />
          </template>
          Conoce nuestros diversos Sistemas de Facturacion
        </n-card>

        <n-card
          title="Servicio Tecnico"
          class="ease-in-out duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-110"
        >
          <template #cover>
            <img
              src="https://metropolitano.edu.pe/96-home_default/reparacion-de-laptops.jpg"
            />
          </template>
          Servicio Tecnico
        </n-card>

        <n-card
          title="Productos"
          class="ease-in-out duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-110"
        >
          <template #cover>
            <img
              src="https://trescom.com.gt/wp-content/uploads/PC-Dell-Optiplex-7040-7050-Slim-Core-i3-6ta.-Generacion-8GB-RAM-DDR4-256GB-SSD-M.2.png"
            />
          </template>
          Equipos de escritorio y mas
        </n-card>
      </div>
    </transition>
</template>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>-->
