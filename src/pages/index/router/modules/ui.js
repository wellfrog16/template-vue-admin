import Root from '@/components/Root.vue';
import Layout from '#index/views/layout/Index.vue';

const icon = 'menu-fix-icon fas fa-pager fa-lg fa-fw';

const route = {
    path: '/ui',
    component: Layout,
    redirect: { path: '/ui/element-ui' },
    meta: {
        title: '组件',
        icon: 'menu-fix-icon fas fa-puzzle-piece fa-lg fa-fw',
    },
    children: [
        {
            path: 'element-ui',
            component: () => import(/* webpackChunkName: "ui" */'#index/views/ui/ElementUI.vue'),
            meta: {
                title: 'ElementUI',
                icon: 'el-icon-platform-eleme',
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
                    component: () => import('#index/views/ui/table/Complex.vue'),
                    meta: {
                        title: '综合表格',
                        icon,
                    },
                },
                {
                    path: 'lazy',
                    component: () => import('#index/views/ui/table/Lazy.vue'),
                    meta: {
                        title: '滚动加载',
                        icon,
                    },
                },
            ],
        },
        {
            path: 'editor',
            component: () => import(/* webpackChunkName: "ui" */'#index/views/ui/Editor.vue'),
            meta: {
                title: '富文本框',
                icon: 'menu-fix-icon far fa-credit-card fa-lg fa-fw',
            },
        },
        {
            path: 'dialog',
            component: () => import(/* webpackChunkName: "ui-dialog" */'#index/views/ui/Dialog.vue'),
            meta: {
                title: '对话框组件',
                icon: 'menu-fix-icon far fa-window-maximize fa-lg fa-fw',
            },
        },
        {
            path: 'package',
            component: () => import(/* webpackChunkName: "ui" */'#index/views/ui/Package.vue'),
            meta: {
                title: '简单二次封装',
                icon: 'menu-fix-icon fas fa-box fa-lg fa-fw',
            },
        },
        {
            path: 'part',
            component: () => import(/* webpackChunkName: "ui-part" */'#index/views/ui/Part.vue'),
            meta: {
                title: '小组件',
                icon: 'menu-fix-icon fas fa-puzzle-piece fa-lg fa-fw',
            },
        },
    ],
};

export default route;
