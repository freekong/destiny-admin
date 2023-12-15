import { useRouter } from 'vue-router';
import type { RouteLocationRaw } from 'vue-router';
import { router as globalRouter } from '@/router'

/**
 * 路由跳转
 * @param inSetup - 是否在vue页面/组件的setup里面调用，在axios里面无法使用useRouter和useRoute
 */
export function useRouterPush(inSetup = true) {
  const router = inSetup ? useRouter() : globalRouter;
  const route = globalRouter.currentRoute;
  /**
   * 路由跳转
   * @param to - 需要跳转的路由
   * @param newTab - 是否在新的浏览器Tab标签打开
   */
  function routerPush(to: RouteLocationRaw, newTab = false) {
    if (newTab) {
      const routerData = router.resolve(to);
      window.open(routerData.href, '_blank');
      return Promise.resolve();
    }
    return router.push(to);
  }

  /**
   * 跳转首页
   * @param newTab - 在新的浏览器标签打开
   */
  function toHome(newTab = false) {
    console.log('[ 11111 ] >')
    routerPush({ path: '/home' }, newTab);
  }

  /**
   * 登录成功后跳转重定向的地址
   */
  function toLoginRedirect() {
    const { query } = route.value;
    console.log('[ route ] >', route)
    if (query?.redirect) {
      routerPush(query.redirect as string);
    } else {
      toHome();
    }
  }

  /**
   * @description: 跳转到登录页面
   * @return {*}
   */  
  function toLogin() {
    routerPush({ path: '/login' });
  }

  return {
    routerPush,
    toHome,
    toLoginRedirect,
    toLogin
  }
}