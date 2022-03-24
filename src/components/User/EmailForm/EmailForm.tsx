import {ApolloError, useMutation} from '@apollo/client';
import {Button, Form} from 'semantic-ui-react';
import {FormikValues, useFormik} from 'formik';
import * as Yup from 'yup';
import './EmailForm.scss';

import {UPDATE_USER} from '../../../gql/user';
import {toast} from 'react-toastify';

interface IProps {
  setShowModal: (showModal: boolean) => void;
  currentEmail?: string;
  refetch: () => void;
}

export const EmailForm = ({setShowModal, currentEmail, refetch}: IProps) => {
  const [updateUser] = useMutation(UPDATE_USER);

  const formik = useFormik({
    initialValues: {
      email: currentEmail || '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
          .email('El email no es valido')
          .required('El email es obligatorio'),
    }),
    onSubmit: (formData: FormikValues) => {
      updateUser({
        variables: {
          input: formData,
        },
      }).then(({data}) => {
        if (!data.updateUser) {
          toast.error('Error al actualizar el email');
        } else {
          toast.success('Email actualizado correctamente');
          refetch();
          setShowModal(false);
        }
      }).catch((error: ApolloError) => {
        console.log(error.message);
        toast.error('Error al actualizar el email');
      });
    },
  });

  return (
    <Form className="email-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        placeholder="Escribe tu nuevo email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && formik.errors.email}
      />

      <Button
        type="submit"
        className="btn-submit"
      >
        Actualizar
      </Button>
    </Form>
  );
};
