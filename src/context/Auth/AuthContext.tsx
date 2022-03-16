import {createContext} from 'react';

import {IUser, IUserState} from '../../interfaces/interfaces';

export type AuthContextProps = {
  authState: IUserState,
  authCheckingFinish: () => void
  authLogin: ({id, name, username, email}: Partial<IUser>) => void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

