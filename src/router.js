import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/blog',
            component: () => import('@/views/blog/index.vue'),
            children: [
                {
                    path: 'list',
                    component: () => import('@/views/blog/list/index.vue')
                }
            ]
        }
    ]
});
