// import './assets/main.css'
import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


import router from './router'
import naive from 'naive-ui'

const app = createApp(App)
const meta = document.createElement("meta");

meta.name = "naive-ui-style";
document.head.appendChild(meta);
app.use(naive)
app.use(createPinia())
app.use(router)


app.mount('#app')
