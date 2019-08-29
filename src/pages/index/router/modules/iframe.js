import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    path: '/iframe',
    component: Layout,
    redirect: { path: '/iframe/index' },
    meta: {
        title: 'iframe',
        icon: 'menu-fix-icon fas fa-dungeon fa-lg fa-fw',
    },
    children: [
        {
            path: 'index',
            component: () => import('#index/views/iframe/Index.vue'),
            meta: {
                title: 'iframe例子',
                type: 'iframe',
                url: 'https://cn.vuejs.org/index.html',
                icon: 'el-icon-link',
                hidden: true,
            },
        },
    ],
};

export default route;
