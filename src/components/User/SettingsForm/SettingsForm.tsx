import {useContext} from 'react';
import {Button} from 'semantic-ui-react';
import {useApolloClient} from '@apollo/client';
import './SettingsForm.scss';

import {AuthContext} from '../../../context/Auth/AuthContext';
import {PasswordForm} from '../PasswordForm/PasswordForm';

interface IProps {
  setShowModal: (showModal: boolean) => void;
  setTitleModal: (title: string) => void;
  setChildrenModal: (children: JSX.Element | JSX.Element[] | null) => void;
}

export const SettingsForm = ({
  setShowModal,
  setTitleModal,
  setChildrenModal,
}: IProps) => {
  const {authLogout} = useContext(AuthContext);
  const client = useApolloClient();

  const onChangePassword = () => {
    setTitleModal('Cambiar tu contraseña');
    setChildrenModal(
        <PasswordForm logout={onLogout}/>,
    );
  };

  const onLogout = async () => {
    await client.clearStore();
    authLogout();
  };

  return (
    <div className="settings-form">
      <Button onClick={onChangePassword}>Cambiar contraseña</Button>
      <Button>Cambiar email</Button>
      <Button>Descriptión</Button>
      <Button>Sitio web</Button>
      <Button onClick={onLogout}>Cerrar sesión</Button>
      <Button onClick={() => setShowModal(false)}>Cancelar</Button>
    </div>
  );
};
