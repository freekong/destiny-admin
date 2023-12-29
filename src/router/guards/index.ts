import type { Router } from "vue-router";
import { start, close } from "@/utils/nprogress";
import { useTabsStore } from "@/store/modules/tabs";

export function createRouterGuard(router: Router) {
  const { addTab }= useTabsStore()
  router.beforeEach(() => {
    start()
  })
  
  router.afterEach(() => {
    addTab(router)
    close()
  })
}