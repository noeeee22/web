import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../hooks/Principal.vue')
        },
        {
            path: '/principal',
            name: 'principal',
        },
    ]
})

export default router