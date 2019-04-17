import router from '../router';
import { helper } from '@/helper/lakes';
import { NProgress } from '@/utils/cdn';

NProgress.configure({ showSpinner: false });

// todo
router.beforeEach((to, from, next) => {
    NProgress.start();

    const normal = ['/login'];
    const site = helper.site();

    // 登陆权限校验
    if (!normal.includes(to.path) && !site.isActive()) {
        // 无权限则返回登录页，并带入想要进入的路径
        router.push({ path: '/login', query: { from: to.path } });
    } else {
        next();
    }
});

router.afterEach(() => {
    NProgress.done();
});
