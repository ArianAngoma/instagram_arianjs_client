import {useCallback} from 'react';
import {Modal, Icon, Button, Dimmer, Loader} from 'semantic-ui-react';
import {useDropzone} from 'react-dropzone';

import './ModalUpload.scss';

interface IProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const ModalUpload = ({show, setShow}: IProps) => {
  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  const onClose = () => {
    setShow(false);
  };

  return (
    <Modal
      size="small"
      open={show}
      onClose={onClose}
      className="modal-upload">
      <div
        {...getRootProps()}
        className="dropzone"
      >
        <Icon name="cloud upload"/>
        <p>Arrastra tu foto que quieras publicar</p>
        <input
          {...getInputProps()}
        />
      </div>
    </Modal>
  );
};
