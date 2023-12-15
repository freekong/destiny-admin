interface UserModel extends Auth.UserInfo {
  password: string;
  userId: number;
  token: string;
}

export const userModel: UserModel[] = [
  {
    userId: 1,
    userRole: 'admin',
    userName: 'admin',
    password: '123456',
    token: '_THIS_IS_TOKEN_'
  },
  {
    userId: 2,
    userRole: 'user',
    userName: 'ddd',
    password: '123456',
    token: '_THIS_IS_TOKEN_'
  },
]