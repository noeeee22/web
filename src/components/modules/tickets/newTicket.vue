<script setup>
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Editor from 'primevue/editor';
const value = ref('');
const ticket = ref('');

const selectedState = ref();
const state = ref([
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

const parameters = () => {
    header = "dadadad"
}
</script>

<template>
    <div class="items-center">
        <div class="flex flex-col gap-2 mb-3">
            <label for="username">Ticket</label>
            <InputText id="username" v-model="ticket" aria-describedby="username-help" />
        </div>
        <div class="flex gap-4 mb-3">
            <div class="flex flex-col gap-2">
                <label for="username">Estado</label>
                <Select v-model="selectedState" :options="state" optionLabel="name" placeholder="Seleccione el estado"
                    class="w-full md:w-64" />
            </div>
            <div class="flex flex-col gap-2">
                <label for="username">Asignar Agente</label>
                <Select v-model="selectedAgent" :options="agent" optionLabel="name" placeholder="Seleccione un agente"
                    class="w-full md:w-64" />
            </div>
        </div>
        <Editor v-model="value" editorStyle="height: 240px" />
        <Button label="Registrar" class="my-2 justify-center items-center w-full" style="background-color: hotpink;" />
    </div>
</template>