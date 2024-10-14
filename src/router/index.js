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
            path: '/help-desk',
            name: 'help-desk',
            component: () => import('../hooks/principalhp.vue'),
            children: [
                        {
                            path: 'tableTickets',
                            name: 'tableTickets',
                            component: () => import('../components/modules/dataTables/tableTicktes.vue')
                        },
                        {
                            path: 'tableUsers',
                            name: 'tableUsers',
                            component: () => import('../components/modules/dataTables/tableUsers.vue')
                        },
                        {
                            path:'panelPrincipal',
                            name:'panelPrincipal',
                            component:()=> import('@/components/panelprincipal/panelPrincipal.vue')
                        }
                    ]            
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/login/login.vue')
        },
    ]
})

// router.beforeEach((to, from, next) => {
// })

export default router
