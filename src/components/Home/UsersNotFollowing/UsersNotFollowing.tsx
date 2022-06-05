import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'semantic-ui-react';
import {useQuery} from '@apollo/client';

import './UsersNotFollowing.scss';
import {GET_NOT_FOLLOWING} from '../../../gql/follow';
import {IUser} from '../../../interfaces/interfaces';
import ImageNotFound from '../../../assets/png/avatar.png';

export const UsersNotFollowing = () => {
  const {
    data,
    loading,
    startPolling,
    stopPolling,
  } = useQuery(GET_NOT_FOLLOWING);

  useEffect(() => {
    startPolling(1000);
    return () => stopPolling();
  }, []);

  if (loading) return null;

  return (
    <div className="users-not-following">
      <h3>Usuarios que no sigues</h3>

      {
        data.getNotFollowing.map((user: IUser) => (
          <Link
            key={user.id}
            to={`/${user.username}`}
            className="users-not-following__user"
          >
            <Image
              src={user.avatar || ImageNotFound}
              avatar
            />

            <span>{user.name}</span>
          </Link>
        ))
      }
    </div>
  );
};
