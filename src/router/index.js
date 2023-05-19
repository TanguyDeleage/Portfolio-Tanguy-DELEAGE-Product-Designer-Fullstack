// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeSection from '../components/pages/Home.vue';
import AboutSection from '../components/pages/About.vue';
import ContactSection from '../components/pages/Contact.vue';

import matematchProject from '../components/projects/matematchProject.vue';
import legidProject from '../components/projects/legidProject.vue';
import mokabaProject from '../components/projects/mokabaProject.vue';

import NotFound from '../components/NotFound.vue';


const routes = [
    {
        path: '/',
        component: HomeSection,
    },
    {
        path: '/about',
        component: AboutSection,
    },
    {
        path: '/contact',
        component: ContactSection,
    },
    {
        path: '/matematch',
        component: matematchProject,
    },
    {
        path: '/legid',
        component: legidProject,
    },
    {
        path: '/mokaba',
        component: mokabaProject,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        // redirect: '/',
    },
]

const router = createRouter ({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(),
    mode: "history",
    routes,
    scrollBehavior() {
        window.scrollTo(0, 0)
    },
})

export default router

