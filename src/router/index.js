import { createRouter, createWebHistory } from 'vue-router'

import HomeSection from '../components/pages/Home.vue'
import AboutSection from '../components/pages/About.vue'
import ContactSection from '../components/pages/Contact.vue'

import matematchProject from '../components/projects/matematchProject.vue'
import legidProject from '../components/projects/legidProject.vue'
import mokabaProject from '../components/projects/mokabaProject.vue'


const routes = [
    {
        path: '/',
        component: HomeSection
    },
    {
        path: '/about',
        component: AboutSection
    },
    {
        path: '/contact',
        component: ContactSection
    },
    {
        path: '/matematch',
        component: matematchProject
    },
    {
        path: '/legid',
        component: legidProject
    },
    {
        path: '/mokaba',
        component: mokabaProject
    },
    {
        path: '/:pathMatch(.*)*',
        component: HomeSection
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
})

export default router

