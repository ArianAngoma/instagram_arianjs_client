import {ApolloError, useMutation, useQuery} from '@apollo/client';
import {Button} from 'semantic-ui-react';
import {toast} from 'react-toastify';
import './HeaderProfile.scss';

import {IUser, IUserState} from '../../../../interfaces/interfaces';

import {ITypeModal} from '../Profile';
import {FOLLOW, IS_FOLLOW, UN_FOLLOW} from '../../../../gql/follow';

interface IProps {
  getUser: IUser;
  auth: IUserState;
  handlerModal: (typeModal: ITypeModal) => void;
}

export const HeaderProfile = ({getUser, auth, handlerModal}: IProps) => {
  const {data, loading, refetch} = useQuery(IS_FOLLOW, {
    variables: {
      username: getUser.username,
    },
  });

  const [follow] = useMutation(FOLLOW);

  const [unFollow] = useMutation(UN_FOLLOW);

  const buttonFollow = () => {
    if (data.isFollow) {
      return (
        <Button
          className="btn-danger"
          onClick={onUnFollow}
        >
          Dejar de seguir
        </Button>
      );
    } else {
      return (
        <Button
          className="btn-action"
          onClick={onFollow}
        >
          Seguir
        </Button>
      );
    }
  };

  const onFollow = () => {
    follow({
      variables: {
        username: getUser.username,
      },
    }).then(({data}) => {
      if (!data.follow) {
        toast.error(`Error al seguir a ${getUser.username}`);
      } else {
        toast.success(`Ahora sigues a ${getUser.username}`);
        refetch();
      }
    }).catch((error: ApolloError) => {
      console.log(error.message);
      toast.error(`Error al seguir a ${getUser.username}`);
    });
  };

  const onUnFollow = () => {
    unFollow({
      variables: {
        username: getUser.username,
      },
    }).then(({data}) => {
      if (!data.unFollow) {
        toast.error(`Error al dejar de seguir a ${getUser.username}`);
      } else {
        toast.success(`Dejaste de seguir a ${getUser.username}`);
        refetch();
      }
    }).catch((error: ApolloError) => {
      console.log(error.message);
      toast.error(`Error al dejar de seguir a ${getUser.username}`);
    });
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
