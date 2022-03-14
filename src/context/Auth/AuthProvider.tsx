import {useReducer} from 'react';

import {AuthContext} from './AuthContext';
import {IUserState} from '../../interfaces/interfaces';
import {AuthReducer} from './AuthReducer';

const INITIAL_STATE: IUserState = {
  checking: true,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({children}: props) => {
  const [authState, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const authLogin = (id: string, name: string) => {
    dispatch({type: 'authLogin', payload: {id, name}});
  };

  return (
    <AuthContext.Provider value={{
      authState,
      authLogin,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
