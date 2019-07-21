// import router, { staticRoutes, asyncRoutes } from '#index/router';
import router, { asyncRoutes } from '#index/router';
// import router from '#index/router';
import store from '#index/store';
// import filterAsyncRoutes, { hasPermission } from '@/helper/permission';
// import { hasPermission } from '@/helper/permission';
import { helper } from '@/helper/lakes';
import { NProgress } from '@/utils/cdn';
import { Permission } from '@/utils/rivers';

// function hasPermission(roles, permissionRoles) {
//     if (roles.includes('admin')) return true // admin permission passed directly
//     if (!permissionRoles) return true
//     return roles.some(role => permissionRoles.indexOf(role) >= 0)
// }

NProgress.configure({ showSpinner: false });

// todo
router.beforeEach((to, from, next) => {
    NProgress.start();

    // 白名单，不需要登陆的路由数组
    const whiteList = ['/login'];
    const site = helper.site();

    if (whiteList.includes(to.path)) { // 白名单直接放行
        next();
    } else if (site.accessToken) { // 有token，已经登陆
        let { permissions } = store.getters;

        if (permissions.length === 0) { // 没有角色列表信息
            store.dispatch('security/role/listByRoles', { codes: site.roles }).then(() => {
                ({ permissions } = store.getters);
                // 将权限信息写入async router中
                const pms = new Permission(asyncRoutes);
                let routes = pms.injectRoles(permissions, site.roles);
                routes = Permission.filterAsyncRoutes(routes, site.roles);
                store.commit('security/account/setState', { routes });
                router.addRoutes(routes); // 动态添加可访问路由表
                next({ ...to });
            }).catch(() => {
                store.commit('member/logout');
                next({ path: '/login', query: { from: to.path } });
            });
        } else if (Permission.hasPermission(to, site.roles) && to.meta && to.meta.title) {
            // 这里额外判断to.meta.title，因为正常情况，没有权限的路由已经被过滤掉了
            // 手动输入没有权限的地址进行访问会找不到路由显示白屏
            // 没有路由就不能依靠meta来判断，否则会和没有设置meta的路由一样认为有权限
            // 因此这里增加to.meta.title判断（每个路由都需要设置title），如果没有title表示没有这个路由，也就代表没有权限
            next();
        } else {
            // console.log('没有权限，带去没有权限的页面');
            next({ path: '/401' });
        }
    } else { // 无token，转到登陆页面
        next({ path: '/login', query: { from: to.path } });
    }
});

router.afterEach(() => {
    NProgress.done();
});
