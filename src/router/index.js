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
                            path: 'dataTabl',
                            name: 'dataTable',
                            component: () => import('../components/modules/dataTables/tableTicktes.vue')
                        },
                        {
                            path: 'tableUsers',
                            name: 'tableUsers',
                            component: () => import('../components/modules/dataTables/tableUsers.vue')
                        },
                        {
                            path:'panel',
                            name:'panel',
                            component:()=> import('@/components/layout/panel/panel.vue')
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
