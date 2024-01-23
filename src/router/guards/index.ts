import type { Router } from "vue-router";
import { start, close } from "@/utils/nprogress";
import { useTabsStore } from "@/store/modules/tabs";

export function createRouterGuard(router: Router) {
  const { addTab }= useTabsStore()
  router.beforeEach(() => {
    console.log('-------beforeEach')
    start()
  })
  
  router.afterEach(() => {
    console.log('--------afterEach')
    addTab(router)
    close()
  })

  router.beforeResolve(() => {
    console.log('[ beforeResolve ] ---------')
  })
}