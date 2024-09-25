import './style.css'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


import router from './router'
import naive from 'naive-ui'

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice'; // Importa ConfirmationService
import ToastService from 'primevue/toastservice';


// const meta = document.createElement("meta");

import Aura from '@primevue/themes/aura';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});

// meta.name = "naive-ui-style";
// document.head.appendChild(meta);
// app.use(naive)
app.use(createPinia())
app.use(router)


app.use(ConfirmationService); // Usa ConfirmationService
app.use(ToastService)

app.mount('#app')
