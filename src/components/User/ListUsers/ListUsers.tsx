import {Image} from 'semantic-ui-react';

import './ListUsers.scss';
import ImageNotFound from '../../../assets/png/avatar.png';
import {IUser} from '../../../interfaces/interfaces';

interface IProps {
  users: IUser[];
  setShowModal: (showModal: boolean) => void;
}

export const ListUsers = ({users, setShowModal}: IProps) => {
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
