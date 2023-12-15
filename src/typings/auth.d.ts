declare namespace Auth {
  /** 用户登录信息 */
  interface LoginForm {
    username: string;
    password: string;
  }

  /**
   * Represents the type of role a user can have.
   * Possible values are 'admin' or 'user'.
   */
  type RoleType = 'admin' | 'user';

  /** 用户信息 */
  interface UserInfo {
    userId: number;
    userName: string;
    userRole: RoleType;
  }
}
