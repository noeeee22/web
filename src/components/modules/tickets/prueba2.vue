<script setup>
import "primeicons/primeicons.css";
import Avatar from "primevue/avatar";
import Tag from 'primevue/tag';


const props = defineProps({
    title: String,
    number: Number,
    icon: String,
    img: String,
});

const PlanesCard = [
    {
        icon: "pi pi-book",
        title: "CHERRY CHERRY LADY",
        subtitle: "Tickets que requieren atención",
        number: 10,
    },
    {
        icon: "pi pi-pencil",
        title: "CHERRY CHERRY LADY",
        subtitle: "Tickets en desarrollo",
        number: 67,
    },
    {
        icon: "pi pi-check-circle",
        title: "TUTUTUTUTUTUTUTUTUT",
        subtitle: "Fecjsdsj 12323 565 ",
        number: 156,
    },

];
</script>

<template>
    <div class="container mx-auto p-4 md:my-5 ">
        <div class="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-3 ">
            <div v-for="(plan, index) in PlanesCard" :key="index" class="col-span-4 ">
                <div class="h-48 w-full flex flex-col justify-between relative rounded-lg shadow-md gap-2 p-5"
                    style="background-color: rgba(255, 255, 255, 0.8);">
                    <div class="flex">
                        <Avatar
                            image="https://img.freepik.com/vector-premium/dulce-felino-icono-gato-dibujos-animados-kawaii-rosa-colores-saturados-acentos-blanco-ambar-ani_801298-60.jpg"
                            shape="circle" class="mr-2" size="large" />
                        <div class="flex flex-col">
                            <span>Nombre</span>
                            <span>nombrecito</span>
                            <Tag severity="danger" value="Danger" class="w-16"></Tag>
                        </div>
                    </div>
                    <div class="flex flex-col items-end justify-end">
                        <span class="font-bold text-md ">{{ plan.title }}</span>

                        <p class="text-sm justify-center">{{ plan.subtitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
