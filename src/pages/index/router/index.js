import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/layout/Index.vue';
import Root from '../../../components/Root.vue';
import Login from '../views/login/Index.vue';

Vue.use(Router);

// 一个空模板，方便子节点使用
// const Root = Vue.component('root', {
//     template: '<router-view></router-view>',
// });

const icon = 'menu-fix-icon fas fa-pager fa-lg fa-fw';

// 静态路由，不参与权限验证
const staticRoutes = [
    {
        path: '',
        redirect: { path: '/login' },
        meta: {
            hidden: true,
        },
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登入界面',
            hidden: true,
        },
    },
    {
        path: '/401',
        component: () => import('../views/error/401.vue'),
        meta: {
            title: '401',
            hidden: true,
        },
    },
];

const asyncRoutes = [
    {
        path: '/home',
        component: Layout,
        redirect: { path: '/home/index' },
        meta: {
            icon: 'menu-fix-icon fas fa-home fa-lg fa-fw',
            title: '首页',
        },
        children: [
            {
                path: 'index',
                component: () => import('../views/home/Index.vue'),
                meta: {
                    hidden: true,
                    title: '首页详细',
                },
            },
        ],
    },
    {
        path: '/document',
        component: Layout,
        redirect: { path: '/document/index' },
        meta: {
            title: '说明文档',
            icon: 'el-icon-document',
        },
        children: [
            {
                path: 'index',
                component: () => import('../views/document/Index.vue'),
                meta: {
                    title: '说明文档首页',
                    hidden: true,
                },
            },
        ],
    },
    {
        path: '/guide',
        component: Layout,
        redirect: { path: '/guide/index' },
        meta: {
            title: '引导页',
            icon: 'menu-fix-icon fas fa-paper-plane fa-lg fa-fw',
        },
        children: [
            {
                path: 'index',
                component: () => import('../views/guide/Index.vue'),
                meta: {
                    title: '引导页首页',
                    hidden: true,
                },
            },
        ],
    },
    // icon
    {
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
                component: () => import('../views/icon/ElIcon.vue'),
                meta: {
                    title: 'element-ui',
                    icon: 'menu-fix-icon fab fa-fonticons-fi fa-lg fa-fw',
                },
            },
            {
                path: 'font-awesome',
                component: () => import('../views/icon/FontAwesome.vue'),
                meta: {
                    title: 'font-awesome',
                    roles: ['editor'],
                    icon: 'menu-fix-icon fab fa-fonticons-fi fa-lg fa-fw',
                },
            },
        ],
    },
    {
        path: '/ui',
        component: Layout,
        redirect: { path: '/ui/package' },
        meta: {
            title: '组件',
            icon: 'menu-fix-icon fas fa-puzzle-piece fa-lg fa-fw',
        },
        children: [
            {
                path: 'package',
                component: () => import('../views/ui/Package.vue'),
                meta: {
                    title: '组件合集',
                    icon: 'el-icon-goods',
                },
            },
            {
                path: 'table',
                component: Root,
                redirect: { path: '/ui/table/complex' },
                meta: {
                    title: '表格',
                    icon: 'menu-fix-icon fas fa-table fa-lg fa-fw',
                },
                children: [
                    {
                        path: 'complex',
                        component: () => import('../views/ui/table/Complex.vue'),
                        meta: {
                            title: '综合表格',
                            icon,
                        },
                    },
                    {
                        path: 'lazy',
                        component: () => import('../views/ui/table/Lazy.vue'),
                        meta: {
                            title: '滚动加载',
                            icon,
                        },
                    },
                ],
            },
            {
                path: 'form',
                component: () => import('../views/ui/Form.vue'),
                meta: {
                    title: '基础表格和表单',
                    icon: 'menu-fix-icon fab fa-wpforms fa-lg fa-fw',
                },
            },
            {
                path: 'editor',
                component: () => import('../views/ui/Editor.vue'),
                meta: {
                    title: '富文本框',
                    icon: 'menu-fix-icon far fa-credit-card fa-lg fa-fw',
                },
            },
            {
                path: 'part',
                component: () => import('../views/ui/Part.vue'),
                meta: {
                    title: '小组件',
                    icon: 'menu-fix-icon fas fa-puzzle-piece fa-lg fa-fw',
                },
            },
        ],
    },
    {
        path: '/echarts',
        component: Layout,
        redirect: { path: '/echarts/package' },
        meta: {
            title: '图表',
            icon: 'menu-fix-icon far fa-chart-bar fa-lg fa-fw',
        },
        children: [
            {
                path: 'package',
                component: () => import('../views/echarts/Package.vue'),
                meta: {
                    title: '图表合集',
                    icon: 'el-icon-goods',
                },
            },
            // {
            //     name: '迁徙',
            //     path: 'migration',
            //     component: () => import('../views/echarts/Migration.vue'),
            //     meta: {
            //         icon: 'menu-fix-icon fas fa-dove fa-lg fa-fw',
            //     },
            // },
            {
                path: 'migration',
                component: () => import('../views/echarts/Migration.vue'),
                meta: {
                    title: '飞机航线图',
                    icon: 'menu-fix-icon fas fa-dove fa-lg fa-fw',
                },
            },
        ],
    },
    {
        path: '/permission',
        component: Layout,
        redirect: { path: '/permission/directive' },
        meta: {
            title: '权限',
            icon: 'menu-fix-icon fas fa-user-shield fa-lg fa-fw',
        },
        children: [
            {
                path: 'directive',
                component: () => import('../views/permission/Directive.vue'),
                meta: {
                    title: '权限控制',
                    icon: 'menu-fix-icon fab fa-ethereum fa-lg fa-fw',
                },
            },
            // {
            //     name: 'admin可见',
            //     path: 'admin',
            //     component: resolve => require(['../views/demo/Index.vue'], resolve),
            //     meta: {
            //         icon: 'menu-fix-icon fas fa-user-circle fa-lg fa-fw',
            //         roles: ['admin'],
            //     },
            // },
            // {
            //     name: 'admin和edit可见',
            //     path: 'edit',
            //     component: resolve => require(['../views/demo/Index.vue'], resolve),
            //     meta: {
            //         icon: 'menu-fix-icon far fa-user-circle fa-lg fa-fw',
            //         roles: ['admin', 'editor'],
            //     },
            // },
        ],
    },
    {
        path: '/split-pane',
        component: Layout,
        redirect: { path: '/split-pane/index' },
        meta: {
            title: '页面分割',
            icon: 'menu-fix-icon fas fa-th-large fa-lg fa-fw',
        },
        children: [
            {
                path: 'index',
                component: () => import('../views/split-pane/Index.vue'),
                meta: {
                    title: '页面分割例子',
                    hidden: true,
                },
            },
        ],
    },
    {
        path: 'https://github.com/wellfrog16/template-vue-admin',
        meta: {
            title: '外链',
            type: 'link',
            icon: 'el-icon-link',
        },
    },
    {
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
                component: () => import('../views/iframe/Index.vue'),
                meta: {
                    title: 'iframe例子',
                    type: 'iframe',
                    url: 'https://cn.vuejs.org/index.html',
                    icon: 'el-icon-link',
                    hidden: true,
                },
            },
        ],
    },
];

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
    // savedPosition is only available for popstate navigations.
        return savedPosition;
    }
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
        position.selector = to.hash;
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => !m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0;
        position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position;
};

// todo 按模块写入单独的文件引用
const router = new Router({
    // mode: 'history',
    scrollBehavior,
    routes: staticRoutes,
});

export {
    staticRoutes,
    asyncRoutes,
};

export default router;
