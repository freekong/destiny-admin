import { mockRequest } from "../request";


export function fetchLogin(loginForm: Auth.LoginForm) {
  return mockRequest.post<{ token: string }>('/login', loginForm)
}