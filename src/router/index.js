import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../hooks/Principal.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/login/login.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    console.log(next());

})

export default router
