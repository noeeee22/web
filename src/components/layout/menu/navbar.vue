<script setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";
import Badge from "primevue/badge";
import Avatar from "primevue/avatar";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import logo from "@/assets/tsi2.png";
import 'primeicons/primeicons.css'
import Button from 'primevue/button';
import miau from "@/assets/miau.jpg";
import Dialog from 'primevue/dialog';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import Popover from 'primevue/popover';

const confirm = useConfirm();
const toast = useToast();

// Definir íconos con el nombre de la clase
const items = ref([
  {
    label: "Home",
    key: "home",
    icon: "pi pi-home",
  },
  {
    label: "Tikets",
    key: "tikets",
    icon: "pi pi-ticket",
  },
  {
    label: "Usuarios",
    key: "users",
    icon: "pi pi-users",
  },
]);


const itemsEnd = ref([
  {
    label: 'Ajustes de Cuenta',
    icon: 'pi pi-file',
  },
  {
    label: 'Cerrar Sesion ',
    icon: 'pi pi-folder-open'
  }
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
const members = ref([
  { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
  { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
  { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
]);

const toggle = (event) => {
  op.value.toggle(event);
}
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <img :src="logo" alt="Logo" class="w-20 mr-3" />
      </template>

      <template #item="{ item, props }">
        <a class="flex items-center" v-bind="props.action">
          <span :class="item.icon"></span>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
      <template #center>

      </template>

      <template #end>
        <div class="flex items-center gap-6">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="busca tu busqueda😼" />
          </IconField>

          <!-- notificaciones -->
          <Button type="button" icon="pi pi-bell" @click="toggle" severity="secondary" />

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

          <Button @click="openPosition('topright')" severity="secondary" aria-label="Filter" style="min-width: 10rem "
            class="bg-pink-400">
            <Avatar image="https://i.pinimg.com/736x/9d/e6/64/9de6644331722c67e77da2b289bb20ea.jpg" shape="circle"
              class="mr-2" />
            <div class="flex flex-col justify-center ">
              <span class="font-semibold text-sm">Maximiliano Milano</span>
              <span class="text-sm">MASTER</span>
            </div>
          </Button>

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
