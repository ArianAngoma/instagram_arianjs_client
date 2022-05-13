import {Modal, Icon, Button, Dimmer, Loader} from 'semantic-ui-react';

import './ModalUpload.scss';

interface IProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const ModalUpload = ({show, setShow}: IProps) => {
  const onClose = () => {
    setShow(false);
  };

  return (
    <Modal
      size="small"
      open={show}
      onClose={onClose}
      className="modal-upload">
      <h1>Esto es el modal Upload</h1>
    </Modal>
  );
};
