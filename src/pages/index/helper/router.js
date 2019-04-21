import router, { staticRoutes, asyncRoutes } from '../router';
import store from '#index/store';
import { permission } from '@/helper/lakes';
import { auth } from '@/utils/rivers';
import { NProgress } from '@/utils/cdn';

NProgress.configure({ showSpinner: false });

// todo
router.beforeEach((to, from, next) => {
    NProgress.start();

    // 白名单，不需要登陆的路由数组
    const whiteList = ['/login'];

    if (whiteList.includes(to.path)) { // 白名单直接放行
        next();
    } else if (auth.get()) { // 有token，已经登陆
        if (store.getters.roles.length === 0) { // 没有角色信息
            store.dispatch('member/info').then((res) => {
                const routers = permission(asyncRoutes, res.roles);
                store.commit('permission/setState', { routes: staticRoutes.concat(routers) });
                router.addRoutes(routers); // 动态添加可访问路由表
                // next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                next({ ...to });
            }).catch(() => {
                store.commit('member/logout');
                next({ path: '/login', query: { from: to.path } });
            });
        } else { // todo
            next();
        }
    } else { // 无token，转到登陆页面
        next({ path: '/login', query: { from: to.path } });
    }
});

router.afterEach(() => {
    NProgress.done();
});
