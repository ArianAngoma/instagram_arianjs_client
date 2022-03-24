import {ApolloError, useMutation} from '@apollo/client';
import {Button, Form, TextArea} from 'semantic-ui-react';
import {FormikValues, useFormik} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import './DescriptionForm.scss';

import {UPDATE_USER} from '../../../gql/user';

interface IProps {
  setShowModal: (showModal: boolean) => void;
  currentDescription?: string;
  refetch: () => void;
}

export const DescriptionForm = ({
  setShowModal,
  currentDescription,
  refetch,
}: IProps) => {
  const [updateUser] = useMutation(UPDATE_USER);

  const formik = useFormik({
    initialValues: {
      description: currentDescription || '',
    },
    validationSchema: Yup.object({
      description: Yup.string()
          .required('La descripción es obligatorio'),
    }),
    onSubmit: (formData: FormikValues) => {
      updateUser({
        variables: {
          input: formData,
        },
      }).then(({data}) => {
        if (!data.updateUser) {
          toast.error('Error al actualizar tu biografía');
        } else {
          toast.success('Biografía actualizada correctamente');
          refetch();
          setShowModal(false);
        }
      }).catch((error: ApolloError) => {
        console.log(error.message);
        toast.error('Error al actualizar tu biografía');
      });
    },
  });

  return (
    <Form
      className="description-form"
      onSubmit={formik.handleSubmit}
    >
      <TextArea
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        className={formik.errors.description && 'error'}
      />

      <Button
        type="submit"
        className="btn-submit"
      >
        Actualziar
      </Button>
    </Form>
  );
};
