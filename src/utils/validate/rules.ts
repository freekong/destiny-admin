import { FormItemRule } from "naive-ui"
import { testPhone } from "./regex"

export const validatePhone = (_rule: FormItemRule, value: string) => {
  if (!value) {
    return new Error('请输入电话！')
  } else if (!testPhone(value)) {
    return new Error('手机号格式错误！')
  }
  return true
}