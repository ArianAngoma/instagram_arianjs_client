import {useState} from 'react';

import {useQuery} from '@apollo/client';
import {Grid, Image} from 'semantic-ui-react';
import './Profile.scss';

import ImageNoFound from '../../assets/png/avatar.png';
import {GET_USER} from '../../gql/user';
import {UserNotFound} from '../UserNotFound/UserNotFound';
import {ModalBasic} from '../Modal/ModalBasic/ModalBasic';

interface IProps {
  username: string;
}

export const Profile = ({username}: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const {data, loading, error} = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  if (loading) return null;
  if (error) return <UserNotFound/>;
  const {getUser} = data;

  return (
    <>
      <Grid className="profile">
        <Grid.Column
          width={5}
          className="profile__left"
        >
          <Image
            src={ImageNoFound}
            avatar
            onClick={() => setShowModal(true)}
          />
        </Grid.Column>

        <Grid.Column
          width={11}
          className="profile__right"
        >
          <div>
            Header Profile
          </div>

          <div>
            Followers
          </div>

          <div className="other">
            <p className="name">{getUser.name}</p>
            {
              (getUser.web) && (
                <a
                  href={getUser.web}
                  className="siteWeb"
                  target="_blank"
                  rel="noreferrer"
                >
                  {getUser.web}
                </a>
              )
            }

            {
              (getUser.description) && (
                <p className="description">{getUser.description}</p>
              )
            }
          </div>
        </Grid.Column>
      </Grid>

      <ModalBasic
        showModal={showModal}
        setShowModal={setShowModal}
        title="Subir Avatar"
      >
        <p>Opciones...</p>
      </ModalBasic>
    </>
  );
};
