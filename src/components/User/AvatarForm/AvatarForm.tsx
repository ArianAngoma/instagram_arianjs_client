import {useCallback, useContext, useState} from 'react';
import {ApolloError, useMutation} from '@apollo/client';
import {Button} from 'semantic-ui-react';
import {useDropzone} from 'react-dropzone';
import {toast} from 'react-toastify';
import './AvatarForm.scss';

import {DELETE_AVATAR, GET_USER, UPDATE_AVATAR} from '../../../gql/user';
import {AuthContext} from '../../../context/Auth/AuthContext';

interface IProps {
  setShowModal: (showModal: boolean) => void;
}

export const AvatarForm = ({setShowModal}: IProps) => {
  const [loadingUploadAvatar, setLoadingUploadAvatar] = useState<boolean>(false);
  const [loadingDeleteAvatar, setLoadingDeleteAvatar] = useState<boolean>(false);
  const {authState} = useContext(AuthContext);

  const [updateAvatar] = useMutation(UPDATE_AVATAR, {
    update(cache, {data: {updateAvatar}}) {
      // console.log(updateAvatar);
      const {getUser} = cache.readQuery({
        query: GET_USER,
        variables: {
          username: authState.username,
        },
      }) as any;

      cache.writeQuery({
        query: GET_USER,
        variables: {
          username: authState.username,
        },
        data: {
          getUser: {
            ...getUser,
            avatar: updateAvatar.urlAvatar,
          },
        },
      });
    },
  });

  const [deleteAvatar] = useMutation(DELETE_AVATAR, {
    update(cache) {
      const {getUser} = cache.readQuery({
        query: GET_USER,
        variables: {
          username: authState.username,
        },
      }) as any;

      cache.writeQuery({
        query: GET_USER,
        variables: {
          username: authState.username,
        },
        data: {
          getUser: {
            ...getUser,
            avatar: '',
          },
        },
      });
    },
  });

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    // console.log(file);

    setLoadingUploadAvatar(true);

    updateAvatar({
      variables: {file},
    }).then(({data}) => {
      if (!data.updateAvatar.status) {
        setLoadingUploadAvatar(false);
        toast.warning('Error al actualizar el avatar');
      } else {
        setLoadingUploadAvatar(false);
        setShowModal(false);
        toast.success('Avatar actualizado');
      }
    }).catch((error: ApolloError) => {
      console.log(error.message);
      setLoadingUploadAvatar(false);
      toast.warning('Server error');
    });
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  const onDeleteAvatar = () => {
    setLoadingDeleteAvatar(true);

    deleteAvatar().then(({data}) => {
      if (!data.deleteAvatar) {
        setLoadingDeleteAvatar(false);
        toast.warning('Error al borrar al avatar');
      } else {
        setLoadingDeleteAvatar(false);
        setShowModal(false);
        toast.success('Avatar eliminado');
      }
    }).catch((error: ApolloError) => {
      console.log(error.message);
      setLoadingDeleteAvatar(false);
      toast.warning('Server error');
    });
  };

  return (
    <div className="avatar-form">
      {/* @ts-ignore */}
      <Button
        {...getRootProps()}
        loading={loadingUploadAvatar}
      >
        Cargar una foto
      </Button>

      <Button
        onClick={onDeleteAvatar}
        loading={loadingDeleteAvatar}
      >
        Eliminar foto actual
      </Button>

      <Button onClick={() => setShowModal(false)}>
        Cancelar
      </Button>

      <input {...getInputProps()}/>
    </div>
  );
};
