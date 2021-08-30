import { router, routes } from './index';
import store from '../modules/store';


// 权限管理
router.beforeEach((to, from, next) => {
    store.completeRouters = routes.concat(store.addRouters);
    next();
});

router.afterEach((to) => {
    if (to.meta?.title) {
        document.title = to.meta.title
    }
});