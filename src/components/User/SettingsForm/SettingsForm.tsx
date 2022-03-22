import {useContext} from 'react';
import {Button} from 'semantic-ui-react';
import {useApolloClient} from '@apollo/client';
import './SettingsForm.scss';

import {AuthContext} from '../../../context/Auth/AuthContext';

interface IProps {
  setShowModal: (showModal: boolean) => void;
}

export const SettingsForm = ({setShowModal}: IProps) => {
  const {authLogout} = useContext(AuthContext);
  const client = useApolloClient();

  const onLogout = async () => {
    await client.clearStore();
    authLogout();
  };

  return (
    <div className="settings-form">
      <Button>Cambiar contraseña</Button>
      <Button>Cambiar email</Button>
      <Button>Descriptión</Button>
      <Button>Sitio web</Button>
      <Button onClick={onLogout}>Cerrar sesión</Button>
      <Button onClick={() => setShowModal(false)}>Cancelar</Button>
    </div>
  );
};
