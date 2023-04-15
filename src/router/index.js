import { createRouter, createWebHistory } from 'vue-router'

import HomeSection from '../components/pages/Home.vue'
import AboutSection from '../components/pages/About.vue'
import ContactSection from '../components/pages/Contact.vue'

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
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router

