import Vue from 'vue';
import Router from 'vue-router';
import { resolve } from 'url';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/gxdp/',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
          // 大屏图片
          path: '/home',
          component: resolve => require(['../components/Views/moudel/dp/dp_map/map/home.vue'], resolve)
        },
        // {
        //   // 大屏图片
        //   path: '/backgrounds',
        //   name:'backgrounds',
        //   component: resolve => require(['../components/Views/moudel/background.vue'], resolve)
        // },
        {
            path: '*',
            redirect:'/'
        }
    ]
})
