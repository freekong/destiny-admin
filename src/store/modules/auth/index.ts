import { defineStore } from "pinia";
import { fetchLogin } from "@/service/api/auth";
import { useRouterPush } from "@/composables";
import { setToken } from "./helpers";

export const useAuthStore = defineStore('auth-store', () => {

  async function login(loginForm: Auth.LoginForm) {
    const res = await fetchLogin(loginForm)
    // console.log('%c [ res ]-12', 'font-size:13px; background:#1bedb7; color:#5ffffb;', res)
    const { data, error } = res
    if (!error) {
      const { token } = data
      handleActionAfterLogin(token)
      window.$message?.success('登录成功！')
    } else {
      window.$message?.error(error.msg)
    }
  }

  function handleActionAfterLogin(token: string) {
    // console.log('%c [ token ]-29', 'font-size:13px; background:#f9e997; color:#ffffdb;', token)
    const { toLoginRedirect } = useRouterPush(false)
    setToken(token)
    toLoginRedirect()
  }

  return {
    login
  }
})