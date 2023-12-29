import { localStg } from '@/utils/storage/local';

/** 获取token */
export function getToken() {
  return localStg.get('token') || '';
}

export function setToken(token: string) {
  localStg.set('token', token)
}

/** 获取用户信息 */
export function getUserInfo() {
  const emptyInfo: Auth.UserInfo = {
    userId: 0,
    userName: '',
    userRole: 'admin'
  };
  const userInfo: Auth.UserInfo = localStg.get('userInfo') || emptyInfo;

  return userInfo;
}

/** 去除用户相关缓存 */
export function clearAuthStorage() {
  localStg.remove('token');
  localStg.remove('refreshToken');
  localStg.remove('userInfo');
}