import {useContext} from 'react';
import {Button} from 'semantic-ui-react';
import {useApolloClient} from '@apollo/client';
import './SettingsForm.scss';

import {IUserState} from '../../../interfaces/interfaces';

import {AuthContext} from '../../../context/Auth/AuthContext';
import {PasswordForm} from '../PasswordForm/PasswordForm';
import {EmailForm} from '../EmailForm/EmailForm';
import {DescriptionForm} from '../DescriptionForm/DescriptionForm';

interface IProps {
  setShowModal: (showModal: boolean) => void;
  setTitleModal: (title: string) => void;
  setChildrenModal: (children: JSX.Element | JSX.Element[] | null) => void;
  getUser: IUserState;
  refetch: () => void;
}

export const SettingsForm = ({
  setShowModal,
  setTitleModal,
  setChildrenModal,
  getUser,
  refetch,
}: IProps) => {
  const {authLogout} = useContext(AuthContext);
  const client = useApolloClient();

  const onChangePassword = () => {
    setTitleModal('Cambiar tu contraseña');
    setChildrenModal(
        <PasswordForm logout={onLogout}/>,
    );
  };

  const onChangeEmail = () => {
    setTitleModal('Cambiar email');
    setChildrenModal(
        <EmailForm
          setShowModal={setShowModal}
          currentEmail={getUser.email}
          refetch={refetch}
        />,
    );
  };

  const onChangeDescription = () => {
    setTitleModal('Actualizar tu biografía');
    setChildrenModal(
        <DescriptionForm
          setShowModal={setShowModal}
          currentDescription={''}
          refetch={refetch}
        />,
    );
  };

  const onLogout = async () => {
    await client.clearStore();
    authLogout();
  };

  return (
    <div className="settings-form">
      <Button onClick={onChangePassword}>Cambiar contraseña</Button>
      <Button onClick={onChangeEmail}>Cambiar email</Button>
      <Button onClick={onChangeDescription}>Descriptión</Button>
      <Button>Sitio web</Button>
      <Button onClick={onLogout}>Cerrar sesión</Button>
      <Button onClick={() => setShowModal(false)}>Cancelar</Button>
    </div>
  );
};
