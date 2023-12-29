import type { MockMethod } from 'vite-plugin-mock'
import { userModel } from '../model';
import { ERROR } from '../common'

const apis: MockMethod[] = [
  {
    url: '/mock/login',
    method: 'post',
    response: (options: Service.MockOption) => {
      // console.log('%c [ options ]-8', 'font-size:13px; background:#d0bb0d; color:#ffff51;', options)
      const { username = undefined, password = undefined } = options.body;

      if (!username || !password) {
        return {
          code: ERROR.ERROR_PARAM.CODE,
          message: ERROR.ERROR_PARAM.MSG,
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
        code: ERROR.ERROR_USER.CODE,
        message: ERROR.ERROR_USER.MSG,
        data: null
      }
    }
  }
]

export default apis