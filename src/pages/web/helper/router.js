
import createRouter from '../router';
import { NProgress } from '@/utils/cdn';

NProgress.configure({ showSpinner: false });

const router = createRouter();
router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
