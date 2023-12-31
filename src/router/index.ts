import { App } from "vue";
import { router } from "./routes";
import { createRouterGuard } from "./guards";



export async function setupRouter(app: App) {
  app.use(router);

  createRouterGuard(router)
  
  await router.isReady();
}




export * from "./routes";
