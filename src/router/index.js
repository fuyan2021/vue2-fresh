import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(Router);

const store = new Vuex.Store({

})

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
        path: '/demo1',
        component: () => import('../views/demo/demo.vue')
    },
    {
        path: '/demo2',
        component: () => import('../views/demo/demo2.vue')
    },
    {
        path: '/detail/:productId',
        component: () => import('../views/detail.vue')
    },
    {
        path: '/my',
        component: () => import('../views/mine/my.vue')
    },
    {
        path: '/login',
        component: () => import('../views/mine/login.vue')
    },
    {
        path: '/type',
        component: () => import('../views/type/type.vue')
    },
    {
        path: '/address',
        component: () => import('../views/address/index.vue'),
        children: [
            {
                path: 'list',
                component: () => import('../views/address/list.vue')
            },
            {
                path: 'demo3',
                component: () => import('../views/address/demo3.vue')
            }
        ]
    },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/404/404.vue') }
]

// 创建路由对象
const router = new Router({
    mode: 'history',
    // 让路由组件回到顶部
    scrollBehavior: () => ({ y: 0 }),
    routes
})
export default router;