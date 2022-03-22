import {Button} from 'semantic-ui-react';
import './SettingsForm.scss';

interface IProps {
  setShowModal: (showModal: boolean) => void;
}

export const SettingsForm = ({setShowModal}: IProps) => {
  return (
    <div className="settings-form">
      <Button>Cambiar contraseña</Button>
      <Button>Cambiar email</Button>
      <Button>Descriptión</Button>
      <Button>Sitio web</Button>
      <Button>Cerrar sesión</Button>
      <Button onClick={() => setShowModal(false)}>Cancelar</Button>
    </div>
  );
};
