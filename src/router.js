import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 在这里导入相关路由组件
import About from './components/About.vue';

const routes = [
    {
        path: '/about',
        component: About
    },
];


const router = new Router({
    mode:'hash',
    routes
});

export default router;