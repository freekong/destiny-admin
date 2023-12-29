import { MockMethod } from "vite-plugin-mock";
import { memberModel } from "../model";
import { ERROR } from "../common";

let currentMemberList: Member.Member[] = memberModel
const apis: MockMethod[] = [
  {
    url: '/mock/member',
    method: 'get',
    response: (options: Service.MockOption) => {
      const { offset = undefined, count = undefined } = options.query;

      if (offset === undefined || count === undefined) {
        return {
          code: ERROR.ERROR_PARAM.CODE,
          message: ERROR.ERROR_PARAM.MSG,
          data: null
        }
      }
      const total = currentMemberList.length
      const memberList = currentMemberList.slice(offset, offset + count);

      return {
        code: 200,
        message: 'success',
        data: {
          total,
          memberList
        }
      }
      
    }
  },
  { // 新增成员
    url: '/mock/member',
    method: 'post',
    response: (options: Service.MockOption) => {
      const { 
        name = undefined, 
        age = undefined, 
        height,
        weight,
        gender,
        education,
        phone = undefined
      } = options.body;

      if (!name || !age || !phone) {
        return {
          code: ERROR.ERROR_PARAM.CODE,
          message: ERROR.ERROR_PARAM.MSG,
          data: null
        }
      }

      currentMemberList.push({
        id: currentMemberList.length + 1,
        name,
        age,
        height,
        weight,
        gender,
        education,
        phone
      })

      return {
        code: 200,
        message: 'add successful!',
        data: null
      }
    }
  },
  {
    url: '/mock/member',
    method: 'put',
    response: (options: Service.MockOption) => {
      const {
        id = undefined,
        name = undefined, 
        age = undefined, 
        height,
        weight,
        gender,
        education,
        phone = undefined
      } = options.body;

      if (!id || !name || !age || !phone) {
        return {
          code: ERROR.ERROR_PARAM.CODE,
          message: ERROR.ERROR_PARAM.MSG,
          data: null
        }
      }

      let editIndex = currentMemberList.findIndex(item => item.id === id)
      console.log('[ editIndex =====> ]', editIndex)

      currentMemberList[editIndex] = {
        id,
        name,
        age,
        height,
        weight,
        gender,
        education,
        phone
      }

      return {
        code: 200,
        message: 'edit successful!',
        data: null
      }
    }
  },
  {
    url: '/mock/member',
    method: 'delete',
    response: (options: Service.MockOption) => {
      const { ids } = options.query
      if (!ids || !ids.length) {
        return {
          code: ERROR.ERROR_PARAM.CODE,
          message: ERROR.ERROR_PARAM.MSG,
          data: null
        }
      }
      let idsArr = ids.split(',')
      idsArr = idsArr.map((item: string) => Number(item))
      currentMemberList = currentMemberList.filter(item => idsArr.indexOf(item.id) == -1)
      return {
        code: 200,
        message: 'delete successful!',
        data: null
      }
    }
  }
]

export default apis