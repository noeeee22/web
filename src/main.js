import './style.css'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


import router from './router'
import naive from 'naive-ui'



// const meta = document.createElement("meta");

import PrimeVue from 'primevue/config';
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


app.mount('#app')
