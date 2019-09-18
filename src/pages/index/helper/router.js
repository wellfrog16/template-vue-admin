
import createRouter, { asyncRoutes } from '#index/router';
import store from '#index/store';
import { helper } from '@/helper/lakes';
import { NProgress } from '@/utils/cdn';
import { Permission } from '@/utils/rivers';

// 多语言
import { getLanguage, loadLanguageAsync } from '@/helper/i18n';

NProgress.configure({ showSpinner: false });

const router = createRouter();
router.beforeEach((to, from, next) => {
    NProgress.start();

    // 多语言，封装一层next，每次路由时判断语言
    const lang = getLanguage();
    const handleNext = (params) => {
        loadLanguageAsync(lang).then(() => next(params));
    };

    // 白名单，不需要登陆的路由数组
    const whiteList = ['/login', '/401'];
    const site = helper.site();

    if (whiteList.includes(to.path)) { // 白名单直接放行
        handleNext();
    } else if (site.accessToken) { // 有token，已经登陆
        let { permissions } = store.getters;

        if (permissions.length === 0) { // 没有角色列表信息（页面刷新vuex信息丢失）
            // storage信息回写，不解构避免写入其他site中的数据
            store.commit('security/account/setState', {
                accessToken: site.accessToken,
                refreshToken: site.refreshToken,
                accountId: site.accountId,
                accountName: site.accountName, // 账户名称
                roles: [...site.roles], // 账户角色
            });

            // 获取权限信息
            store.dispatch('security/role/listByRoles', { codes: site.roles }).then(() => {
                // permissions为路由数组
                ({ permissions } = store.getters);
                // 将权限信息写入async router中
                const pms = new Permission(asyncRoutes);
                let routes = pms.injectRoles(permissions, site.roles);

                // 过滤出符合自己角色的路由
                routes = Permission.filterAsyncRoutes(routes, site.roles);

                // 保存自己的路由
                store.commit('security/account/setState', { routes });

                router.matcher = createRouter().matcher;
                router.addRoutes(routes); // 动态添加可访问路由表
                handleNext({ ...to });
            }).catch(() => {
                handleNext({ path: '/login', query: { from: to.path } });
            });
        // } else if (Permission.hasPermission(to, site.roles)) {
        } else if (Permission.hasPermission(to, site.roles)) {
            handleNext();
        } else {
            console.log('没有权限，带去没有权限的页面');
            handleNext({ path: '/401' });
        }
    } else { // 无token，转到登陆页面
        handleNext({ path: '/login', query: { from: to.path } });
    }
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
