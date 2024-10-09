<script setup>
import { ref } from "vue";
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Editor from 'primevue/editor';
import Button from 'primevue/button';

const value = ref('');
const ticket = ref('');
const visible = ref(true);

const selectedCity = ref();
const cities = ref([
    { name: 'Alta', code: 'NY' },
    { name: 'Media', code: 'RM' },
    { name: 'Baja', code: 'LDN' },
]);

const selectedAgent = ref();
const agent = ref([
    { name: 'Milaneso', code: 'NY' },
    { name: 'Naranjo', code: 'RM' },
    { name: 'igriega', code: 'LDN' },
]);

</script>
<template>
    <div class="card flex justify-center">
        <Button icon="pi pi-plus-circle" severity="contrast" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Nuevo Ticket " :style="{ width: '60vh' }">
            <div class="items-center">
                <div class="flex flex-col gap-2 mb-3">
                    <label for="username">Ticket</label>
                    <InputText id="username" v-model="ticket" aria-describedby="username-help" />
                </div>
                <div class="flex gap-4 mb-3">
                    <div class="flex flex-col gap-2">
                        <label for="username">Estado</label>
                        <Select v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Seleccione el estado" class="w-full md:w-64" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="username">Asignar Agente</label>
                        <Select v-model="selectedAgent" :options="agent" optionLabel="name"
                            placeholder="Seleccione un agente" class="w-full md:w-64" />
                    </div>
                </div>
                <Editor v-model="value" editorStyle="height: 240px" />
                <Button label="Registrar" class="my-2 justify-center items-center w-full"
                    style="background-color: hotpink;" />
            </div>
        </Dialog>
    </div>
</template>
