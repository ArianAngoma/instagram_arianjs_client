import {ApolloError, useMutation} from '@apollo/client';
import {Button, Form} from 'semantic-ui-react';
import {toast} from 'react-toastify';
import {FormikValues, useFormik} from 'formik';
import * as Yup from 'yup';
import './PasswordForm.scss';

import {UPDATE_USER} from '../../../gql/user';

interface IProps {
  logout: () => void;
}

interface IInitialValues {
  currentPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

const initialValues: IInitialValues = {
  currentPassword: '',
  newPassword: '',
  repeatNewPassword: '',
};

const validationSchema = Yup.object({
  currentPassword: Yup.string()
      .required('La contraseña es obligatorip'),
  newPassword: Yup.string()
      .required('La nueva contraseña es obligatorio')
      .oneOf([Yup.ref('repeatNewPassword')], 'Las contraseñas no son iguales'),
  repeatNewPassword: Yup.string()
      .required('La nueva contraseña es obligatorio')
      .oneOf([Yup.ref('newPassword')], 'Las contraseñas no son iguales'),
});

export const PasswordForm = ({logout}: IProps) => {
  const [updateUser] = useMutation(UPDATE_USER);

  const onSubmit = (values: FormikValues) => {
    updateUser({
      variables: {
        input: {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        },
      },
    }).then(({data}) => {
      if (!data.updateUser) {
        toast.error('Error al cambiar la contraseña');
      } else {
        logout();
        toast.success('Contraseña actualizada correctamente');
      }
    }).catch((error: ApolloError) => {
      console.log(error);
      toast.error('Error al cambiar la contraseña');
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form className="password-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        type="password"
        placeholder="Contraseña actual"
        name="currentPassword"
        value={formik.values.currentPassword}
        onChange={formik.handleChange}
        error={formik.touched.currentPassword && formik.errors.currentPassword}
      />

      <Form.Input
        type="password"
        placeholder="Nueva contraseña"
        name="newPassword"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        error={formik.touched.newPassword && formik.errors.newPassword}
      />

      <Form.Input
        type="password"
        placeholder="Repetir nueva contraseña"
        name="repeatNewPassword"
        value={formik.values.repeatNewPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.repeatNewPassword && formik.errors.repeatNewPassword
        }
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
