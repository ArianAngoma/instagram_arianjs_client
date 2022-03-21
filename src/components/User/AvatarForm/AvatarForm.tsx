import {useCallback, useState} from 'react';
import {ApolloError, useMutation} from '@apollo/client';
import {Button} from 'semantic-ui-react';
import {useDropzone} from 'react-dropzone';
import {toast} from 'react-toastify';
import './AvatarForm.scss';

import {UPDATE_AVATAR} from '../../../gql/user';

interface IProps {
  setShowModal: (showModal: boolean) => void;
}

export const AvatarForm = ({setShowModal}: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    // console.log(file);

    setLoading(true);

    updateAvatar({
      variables: {file},
    }).then(({data}) => {
      if (!data.updateAvatar.status) {
        toast.warning('Error al actualizar el avatar');
        setLoading(false);
      } else {
        setLoading(false);
        setShowModal(false);
      }
    }).catch((error: ApolloError) => {
      console.log(error.message);
      toast.warning('Error de servidor');
      setLoading(false);
    });
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <div className="avatar-form">
      {/* @ts-ignore */}
      <Button
        {...getRootProps()}
        loading={loading}
      >
        Cargar una foto
      </Button>

      <Button>
        Eliminar foto actual
      </Button>

      <Button onClick={() => setShowModal(false)}>
        Cancelar
      </Button>

      <input {...getInputProps()}/>
    </div>
  );
};
