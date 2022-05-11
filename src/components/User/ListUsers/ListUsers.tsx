import {Image} from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';

import './ListUsers.scss';
import ImageNotFound from '../../../assets/png/avatar.png';
import {IUser} from '../../../interfaces/interfaces';

interface IProps {
  users: IUser[];
  setShowModal: (showModal: boolean) => void;
}

export const ListUsers = ({users, setShowModal}: IProps) => {
  const history = useHistory();

  const goToUser = (username: string) => {
    setShowModal(false);
    history.push(`/${username}`);
  };

  return (
    <div>
      {
        !users.length ? (
          <p className="list-users__not-users">No se han encontrado usuarios</p>
        ) : (
          users.map((user: IUser, index: number) => (
            <div
              key={index}
              className="list-users__users"
              onClick={() => goToUser(user.username)}
            >
              <Image src={user.avatar || ImageNotFound} avatar/>
              <div>
                <p>{user.name}</p>
                <p>{user.username}</p>
              </div>
            </div>
          ))
        )
      }
    </div>
  );
};
