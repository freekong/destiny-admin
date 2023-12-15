import { defineStore } from "pinia";
import { fetchLogin } from "@/service";
import { ElMessage } from "element-plus";
import { useRouterPush } from "~/src/composables";
import { setToken } from "./helpers";


export const useAuthStore = defineStore('auth-store', () => {

  async function login(loginForm: Auth.LoginForm) {
    const res = await fetchLogin(loginForm)
    console.log('%c [ res ]-12', 'font-size:13px; background:#1bedb7; color:#5ffffb;', res)
    const { data, error } = res
    if (!error) {
      const { token } = data
      handleActionAfterLogin(token)
      ElMessage({
        type: 'success',
        message: '登录成功！'
      })
    } else {
      ElMessage({
        type: 'error',
        message: error.msg
      })
    }
  }

  function handleActionAfterLogin(token: string) {
    console.log('%c [ token ]-29', 'font-size:13px; background:#f9e997; color:#ffffdb;', token)
    const { toLoginRedirect } = useRouterPush(false)
    setToken(token)
    toLoginRedirect()
  }

  return {
    login
  }
})