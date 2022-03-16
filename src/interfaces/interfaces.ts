export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar?: string;
  web?: string;
  description?: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface IRegisterUserInput extends Pick<IUser, 'name' | 'username' | 'email' | 'password'> {
  repeatPassword: string;
}

export type ILoginUserInput = Pick<IUser, 'email' | 'password'>

export interface IResultAuth {
  user: IUser;
  token: string;
}

export interface IUserState extends Partial<IUser> {
  checking: boolean;
}
