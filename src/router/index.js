import {createRouter, createWebHistory} from 'vue-router'
import AboutF from '../views/AboutF'
import HomeF from '../views/HomeF'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeF
    },
    
    {
        path: '/about',
        name: 'About',
        component: AboutF
    }

] 

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),  routes,
})
export default router