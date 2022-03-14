import {createContext} from 'react';

import {IUserState} from '../../interfaces/interfaces';

export type AuthContextProps = {
  authState: IUserState,
  authLogin: (id: string, name: string) => void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

