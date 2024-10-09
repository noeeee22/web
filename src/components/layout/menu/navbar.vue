<script setup>
import { ref, nextTick } from "vue";
import Menubar from "primevue/menubar";
import Avatar from "primevue/avatar";
import logo from "@/assets/tsi2.png";
import 'primeicons/primeicons.css'
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import Popover from 'primevue/popover';
import { useRouter } from 'vue-router';
import panel from "../panel/panel.vue";


const confirm = useConfirm();
const toast = useToast();
const router = useRouter();

const items = ref([
  {
    label: "Tickets",
    icon: "pi pi-ticket",
    command: ()=>{
      router.push({ name: 'dataTable' });
    }
  },
    {
    label: "Usuarios",
    icon: "pi pi-users",
    command: ()=>{
      router.push({ name: 'tableUsers' });
    }
  },
]);

const position = ref('center');
const visible = ref(false);

const openPosition = (pos) => {
  position.value = pos;
  visible.value = true;
}

const confirm1 = () => {
  confirm.require({
    message: 'Are you sure you want to proceed?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Save'
    },
    accept: () => {
      toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    },
    reject: () => {
      toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
  });
};


const confirm2 = () => {
  confirm.require({
    message: '¿Seguro que desea cerrar sesion?',
    header: 'Danger Zone',
    icon: 'pi pi-info-circle',
    rejectLabel: 'Cancelar',
    rejectProps: {
      label: 'ancelar',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Cerrar',
      severity: 'danger'
    },
    accept: () => {
      toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
    },
    reject: () => {
      toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
  });
};


//notificacionesd
const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
}

const showInput = ref(false);
const searchQuery = ref('');

const toggleInput = () => {
  showInput.value = !showInput.value;
  if (showInput.value) {
    nextTick(() => {
      document.querySelector('input')?.focus();
    });
  }
};

const startSearch = () => {
  console.log("Iniciar búsqueda con: ", searchQuery.value);
  // Aquí iría la lógica de búsqueda
};
</script>

<template>
  <div class="card top-0 left-0 w-full z-50 justify-between md:justify-evenly flex-row-reverse md:flex-row">
    <Menubar :model="items">
      <template #start>
        <a href="panel">
          <img :src="logo" alt="Logo" class="md:w-20 mr-3 w-20" />
        </a>
      </template>

      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
        <!-- <a class="flex items-center" v-bind="props.action">
          <span :class="item.icon"></span>
          <span class="ml-2">{{ item.label }}</span>
        </a> -->
      </template>
      <template #center>

      </template>

      <template #end>
        <div class="flex items-center gap-6">
          <div class="relative flex items-center">
            <!-- Ícono que activa el input -->
            <button @click="toggleInput" class="p-2 rounded-full transition">
              <i class="pi pi-search text-gray-600"></i>
            </button>

            <!-- Input desplegable -->
            <input
              v-if="showInput"
              v-model="searchQuery"
              @blur="toggleInput"
              @keyup.enter="startSearch"
              type="text"
              class="ml-2 transition-width duration-300 ease-in-out bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-200"
              style="width: 0; opacity: 0;"
              :style="{ width: showInput ? '200px' : '0', opacity: showInput ? 1 : 0 }"
              placeholder="Buscar..."
            />
          </div>

          <!-- notificaciones -->
          <Button  icon="pi pi-bell" @click="toggle" class="!bg-white !text-gray-600 !border-none">  </Button>
          <Popover ref="op">
            <div class="flex flex-col gap-4 w-[16rem]">
              <div>
                <span class="font-medium block mb-2">Share this document</span>
              </div>
              <div>
                <span>no hay notificaciones</span>
              </div>
            </div>
          </Popover>
        
          
          <div @click="openPosition('topright')" aria-label="Filter"
            class="flex items-center justify-end sm:justify-start ">
            <Avatar image="https://i.pinimg.com/736x/9d/e6/64/9de6644331722c67e77da2b289bb20ea.jpg" shape="circle"
              class="mr-2" />
            <div class="flex flex-col justify-center ">
              <span class="font-semibold text-sm hidden sm:inline-block">Maximiliano Milano</span>
              <span class="text-sm hidden sm:inline-block">MASTER</span>
            </div>
          </div>

          <Dialog v-model:visible="visible" header="Cuenta" :style="{ width: '12rem' }" :position="position"
            :modal="true" :draggable="false">
            <div class="card flex flex-col justify-star gap-5">
              <Toast />
              <ConfirmDialog></ConfirmDialog>
              <div @click="confirm1()" label="Save" outlined
                class="text-sm bg-white hover:font-semibold hover:text-gray-800">Ajustes de
                cuenta</div>
              <div @click="confirm2()" severity="danger" outlined
                class="text-sm hover:font-semibold hover:text-gray-800">Cerrar sesión
              </div>
            </div>
          </Dialog>
        </div>
      </template>

    </Menubar>
  </div>
</template>
<style scoped>
input {
  transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;}
</style>
