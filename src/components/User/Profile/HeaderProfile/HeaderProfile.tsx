import {Button} from 'semantic-ui-react';
import './HeaderProfile.scss';

import {IUser, IUserState} from '../../../../interfaces/interfaces';
import {ITypeModal} from '../Profile';

interface IProps {
  getUser: IUser;
  auth: IUserState;
  handlerModal: (typeModal: ITypeModal) => void;
}

export const HeaderProfile = ({getUser, auth, handlerModal}: IProps) => {
  return (
    <div className="header-profile">
      <h2>{getUser.username}</h2>

      {
        (getUser.username === auth.username) ? (
          <Button onClick={() => handlerModal('settings')}>
            Ajustes
          </Button>
        ) : (
          <Button>Seguir</Button>
        )
      }
    </div>
  );
};
