import {useReducer} from 'react';

import {IUser, IUserState} from '../../interfaces/interfaces';

import {AuthContext} from './AuthContext';
import {AuthReducer} from './AuthReducer';

const INITIAL_STATE: IUserState = {
  checking: true,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({children}: props) => {
  const [authState, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const authLogin = ({id, name, username, email}: Partial<IUser>) => {
    dispatch({type: 'authLogin', payload: {id, name, username, email}});
  };

  const authCheckingFinish = () => {
    dispatch({type: 'authCheckingFinish'});
  };

  return (
    <AuthContext.Provider value={{
      authState,
      authCheckingFinish,
      authLogin,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
