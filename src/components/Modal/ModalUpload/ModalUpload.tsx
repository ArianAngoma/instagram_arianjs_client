import {useCallback, useState} from 'react';
import {ApolloError, useMutation} from '@apollo/client';
import {Modal, Icon, Button, Dimmer, Loader} from 'semantic-ui-react';
import {useDropzone} from 'react-dropzone';
import {toast} from 'react-toastify';

import './ModalUpload.scss';

import {PUBLISH} from '../../../gql/publication';

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
  const [publishMutation] = useMutation(PUBLISH);

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

  const onPublish = () => {
    publishMutation({
      variables: {
        file: fileUpload?.file,
      },
    }).then((data) => {
      console.log(data);
    }).catch((error: ApolloError) => {
      console.log(error);
      toast.error('Error al publicar');
    });
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

      {
        fileUpload && (
          <Button
            className="btn-upload btn-action"
            onClick={onPublish}
          >
            Publicar
          </Button>
        )
      }
    </Modal>
  );
};
