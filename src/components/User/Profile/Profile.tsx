import {useContext, useState} from 'react';

import {useQuery} from '@apollo/client';
import {Grid, Image} from 'semantic-ui-react';
import './Profile.scss';
import ImageNoFound from '../../../assets/png/avatar.png';

import {GET_USER} from '../../../gql/user';
import {UserNotFound} from '../../UserNotFound/UserNotFound';
import {ModalBasic} from '../../Modal/ModalBasic/ModalBasic';
import {AvatarForm} from '../AvatarForm/AvatarForm';
import {AuthContext} from '../../../context/Auth/AuthContext';
import {HeaderProfile} from './HeaderProfile/HeaderProfile';
import {SettingsForm} from '../SettingsForm/SettingsForm';
import {Followers} from './Followers/Followers';

interface IProps {
  username: string;
  totalPublications: number;
}

export type ITypeModal = 'avatar' | 'settings';

export const Profile = ({username, totalPublications}: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState<string>('');
  const [
    childrenModal,
    setChildrenModal,
  ] = useState<JSX.Element | JSX.Element[] | null>(null);
  const {authState} = useContext(AuthContext);

  const {data, loading, error, refetch} = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  if (loading) return null;
  if (error) return <UserNotFound/>;
  const {getUser} = data;

  const handlerModal = (typeModal: ITypeModal) => {
    switch (typeModal) {
      case 'avatar':
        setTitleModal('Cambiar foto de perfil');
        setChildrenModal(
            <AvatarForm setShowModal={setShowModal}/>,
        );
        setShowModal(true);
        break;
      case 'settings':
        setTitleModal('');
        setChildrenModal(
            <SettingsForm
              setShowModal={setShowModal}
              setTitleModal={setTitleModal}
              setChildrenModal={setChildrenModal}
              getUser={getUser}
              refetch={refetch}
            />,
        );
        setShowModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Grid className="profile">
        <Grid.Column
          width={5}
          className="profile__left"
        >
          <Image
            src={getUser.avatar ? getUser.avatar : ImageNoFound}
            avatar
            onClick={() => username === authState.username &&
              handlerModal('avatar')}
          />
        </Grid.Column>

        <Grid.Column
          width={11}
          className="profile__right"
        >
          <HeaderProfile
            getUser={getUser}
            auth={authState}
            handlerModal={handlerModal}
          />

          <Followers
            username={username}
            totalPublications={totalPublications}
          />

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
        title={titleModal}
      >
        {
          childrenModal
        }
      </ModalBasic>
    </>
  );
};
