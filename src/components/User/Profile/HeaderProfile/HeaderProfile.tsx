import {useQuery} from '@apollo/client';
import {Button} from 'semantic-ui-react';
import './HeaderProfile.scss';

import {IUser, IUserState} from '../../../../interfaces/interfaces';

import {ITypeModal} from '../Profile';
import {IS_FOLLOW} from '../../../../gql/follow';

interface IProps {
  getUser: IUser;
  auth: IUserState;
  handlerModal: (typeModal: ITypeModal) => void;
}

export const HeaderProfile = ({getUser, auth, handlerModal}: IProps) => {
  const {data, loading} = useQuery(IS_FOLLOW, {
    variables: {
      username: getUser.username,
    },
  });

  const buttonFollow = () => {
    if (data.isFollow) {
      return (
        <Button className="btn-danger">
          Dejar de seguir
        </Button>
      );
    } else {
      return (
        <Button className="btn-action">
          Seguir
        </Button>
      );
    }
  };

  return (
    <div className="header-profile">
      <h2>{getUser.username}</h2>

      {
        (getUser.username === auth.username) ? (
          <Button onClick={() => handlerModal('settings')}>
            Ajustes
          </Button>
        ) : (
          !loading && buttonFollow()
        )
      }
    </div>
  );
};
