import {Button} from 'semantic-ui-react';
import './HeaderProfile.scss';

import {IUser, IUserState} from '../../../../interfaces/interfaces';

interface IProps {
  getUser: IUser;
  auth: IUserState;
}

export const HeaderProfile = ({getUser, auth}: IProps) => {
  return (
    <div className="header-profile">
      <h2>{getUser.username}</h2>

      {
        (getUser.username === auth.username) ? (
          <Button>Ajustes</Button>
        ) : (
          <Button>Seguir</Button>
        )
      }
    </div>
  );
};
