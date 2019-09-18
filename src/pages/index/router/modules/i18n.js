import Layout from '#index/views/layout/Index.vue';

const route = {
    path: '/i18n',
    component: Layout,
    redirect: { path: '/i18n/index' },
    meta: {
        title: '多语言',
        icon: 'menu-fix-icon fas fa-language fa-lg fa-fw',
    },
    children: [
        {
            path: 'index',
            component: () => import('#index/views/i18n/Index.vue'),
            meta: {
                title: '多语言',
                hidden: true,
            },
        },
    ],
};

export default route;
