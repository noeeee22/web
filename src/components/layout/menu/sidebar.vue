<script setup>
import { ref } from "vue";
import Menu from 'primevue/menu';

const items = ref([
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' }
]);
</script>
<template>
    <div class="card flex justify-start">
        <Menu :model="items" />
    </div>
</template>
