import type { MockMethod } from 'vite-plugin-mock'
import { userModel } from '../model';

/** 参数错误的状态码 */
const ERROR_PARAM_CODE = 10000;

const ERROR_USER_CODE = 400201;

const ERROR_PARAM_MSG = '参数校验失败！';

const ERROR_USER_MSG = '用户名或密码错误！';

const apis: MockMethod[] = [
  {
    url: '/mock/login',
    method: 'post',
    response: (options: Service.MockOption) => {
      // console.log('%c [ options ]-8', 'font-size:13px; background:#d0bb0d; color:#ffff51;', options)
      const { username = undefined, password = undefined } = options.body;

      if (!username || !password) {
        return {
          code: ERROR_PARAM_CODE,
          message: ERROR_PARAM_MSG,
          data: null
        };
      }

      const findItem = userModel.find(item => item.userName === username && item.password === password)
      if (findItem) {
        return {
          code: 200,
          message: 'success',
          data: {
            token: findItem.token
          }
        }
      }

      return {
        code: ERROR_USER_CODE,
        message: ERROR_USER_MSG,
        data: null
      }
    }
  }
]

export default apis