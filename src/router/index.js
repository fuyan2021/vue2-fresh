import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 路由数组
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home/',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/buy',
        component: () => import('../views/buy/BuyView.vue')
    },
    {
        path: '/demo',
        component: () => import('../views/demo.vue')
    },
    {
        path: '/detail/:productId',
        component: () => import('../views/detail.vue')
    },
    

]

// 创建路由对象
const router = new Router({
    mode: 'history',
    routes
})
export default router;