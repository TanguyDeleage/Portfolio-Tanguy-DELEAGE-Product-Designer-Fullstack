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
        component: HomeSection,
        meta: { scrollToTop: true }
    },
    {
        path: '/about',
        component: AboutSection,
        meta: { scrollToTop: true }
    },
    {
        path: '/contact',
        component: ContactSection,
        meta: { scrollToTop: true }
    },
    {
        path: '/matematch',
        component: matematchProject,
        meta: { scrollToTop: true }
    },
    {
        path: '/legid',
        component: legidProject,
        meta: { scrollToTop: true }
    },
    {
        path: '/mokaba',
        component: mokabaProject,
        meta: { scrollToTop: true }
    },
    {
        path: '/:pathMatch(.*)*',
        component: HomeSection,
        meta: { scrollToTop: true }
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router

