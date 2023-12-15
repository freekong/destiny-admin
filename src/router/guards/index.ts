import type { Router } from "vue-router";
import { start, close } from "@/utils/nprogress";

export function createRouterGuard(router: Router) {
  router.beforeEach(() => {
    start()
  })
  
  router.afterEach(() => {
    close()
  })
}