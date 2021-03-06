import {IUser, IUserState} from '../../interfaces/interfaces';

type AuthAction =
  | { type: 'authLogin', payload: Partial<IUser> }
  | { type: 'authCheckingFinish' }
  | { type: 'authLogout' }

export const AuthReducer = (
    state: IUserState,
    action: AuthAction,
): IUserState => {
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
