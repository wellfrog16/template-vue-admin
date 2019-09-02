import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    path: '/security',
    component: Layout,
    redirect: { path: '/security/account' },
    meta: {
        title: '账户管理',
        icon: 'menu-fix-icon fas fa-user-shield fa-lg fa-fw',
    },
    children: [
        {
            path: 'account',
            component: () => import('#index/views/security/Account.vue'),
            meta: {
                title: '账户列表',
                icon: 'menu-fix-icon fas fa-users fa-lg fa-fw',
            },
        },
        {
            path: 'directive',
            component: () => import('#index/views/security/Directive.vue'),
            meta: {
                title: '权限控制',
                icon: 'menu-fix-icon fab fa-ethereum fa-lg fa-fw',
            },
        },
        {
            path: 'role',
            component: () => import('#index/views/security/Role.vue'),
            meta: {
                title: '权限设置',
                icon: 'menu-fix-icon fas fa-user-cog fa-lg fa-fw',
            },
        },
        // {
        //     name: 'admin可见',
        //     path: 'admin',
        //     component: resolve => require(['#index/views/demo/Index.vue'], resolve),
        //     meta: {
        //         icon: 'menu-fix-icon fas fa-user-circle fa-lg fa-fw',
        //         roles: ['admin'],
        //     },
        // },
        // {
        //     name: 'admin和edit可见',
        //     path: 'edit',
        //     component: resolve => require(['#index/views/demo/Index.vue'], resolve),
        //     meta: {
        //         icon: 'menu-fix-icon far fa-user-circle fa-lg fa-fw',
        //         roles: ['admin', 'editor'],
        //     },
        // },
    ],
};

export default route;
