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
  const [isLoading, setIsLoading] = useState<Boolean>(false);
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
    setIsLoading(false);
    setFileUpload(null);
    setShow(false);
  };

  const onPublish = () => {
    setIsLoading(true);
    publishMutation({
      variables: {
        file: fileUpload?.file,
      },
    }).then(({data}) => {
      if (!data.publish.status) {
        toast.warning('Error en la publicación');
        onClose();
      } else {
        toast.success('Publicado correctamente');
        onClose();
      }
    }).catch((error: ApolloError) => {
      console.log(error);
      toast.error('Error al publicar');
      onClose();
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

      {
        isLoading && (
          <Dimmer
            active
            className="publishing"
          >
            <Loader/>
            <p>Publicando...</p>
          </Dimmer>
        )
      }
    </Modal>
  );
};
