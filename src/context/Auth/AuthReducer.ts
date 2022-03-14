import {IUserState} from '../../interfaces/interfaces';

type AuthAction =
  | { type: 'authLogin', payload: { id: string, name: string } }
  | { type: 'authCheckingFinish', payload: { checking: boolean } }
  | { type: 'authLogout', payload: { checking: boolean } }

export const AuthReducer = (state: IUserState, action: AuthAction): IUserState => {
  switch (action.type) {
    case 'authLogin':
      return {
        ...state,
        ...action.payload,
        checking: false,
      };

    case 'authCheckingFinish':
      return {
        ...state,
        checking: false,
      };

    case 'authLogout':
      return {
        checking: false,
      };

    default:
      return state;
  }
};
