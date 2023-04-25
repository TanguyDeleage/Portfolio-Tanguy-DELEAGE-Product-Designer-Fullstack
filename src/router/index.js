import { createRouter, createWebHistory } from 'vue-router'

import HomeSection from '../components/pages/Home.vue'
import AboutSection from '../components/pages/About.vue'
import ContactSection from '../components/pages/Contact.vue'

import matematchProject from '../components/projects/matematchProject.vue'
import legidProject from '../components/projects/legidProject.vue'


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
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router

