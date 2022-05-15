import {useCallback, useState} from 'react';
import {Modal, Icon, Button, Dimmer, Loader} from 'semantic-ui-react';
import {useDropzone} from 'react-dropzone';

import './ModalUpload.scss';

interface IProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

interface IStateFileUpload {
  type: string;
  file: File;
  preview: string;
}

export const ModalUpload = ({show, setShow}: IProps) => {
  const [fileUpload, setFileUpload] = useState<IStateFileUpload | null>(null);

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setFileUpload({
      type: 'image',
      file,
      preview: URL.createObjectURL(file),
    });
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  const onClose = () => {
    setShow(false);
    setFileUpload(null);
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
        style={fileUpload?.file && {border: 0}}
      >
        {
          !fileUpload && (
            <>
              <Icon name="cloud upload"/>
              <p>Arrastra tu foto que quieras publicar</p>
            </>
          )
        }
        <input
          {...getInputProps()}
        />
      </div>

      {
        fileUpload?.type === 'image' && (
          <div
            className="image"
            style={{
              backgroundImage: `url(${fileUpload.preview})`,
            }}
          />
        )
      }
    </Modal>
  );
};
