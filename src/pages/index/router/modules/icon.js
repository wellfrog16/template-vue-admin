import Layout from '#index/views/layout/Index.vue';

const route = {
    path: '/icon',
    component: Layout,
    redirect: { path: '/icon/element-ui' },
    meta: {
        title: '图标',
        icon: 'menu-fix-icon fab fa-fonticons fa-lg fa-fw',
    },
    children: [
        {
            path: 'element-ui',
            component: () => import('#index/views/icon/ElIcon.vue'),
            meta: {
                title: 'element-ui',
                icon: 'el-icon-platform-eleme',
            },
        },
        {
            path: 'font-awesome',
            component: () => import('#index/views/icon/FontAwesome.vue'),
            meta: {
                title: 'font-awesome',
                icon: 'menu-fix-icon fab fa-font-awesome fa-lg fa-fw',
            },
        },
    ],
};

export default [route];
