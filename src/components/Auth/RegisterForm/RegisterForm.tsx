import {Dispatch, SetStateAction} from 'react';

import {ApolloError, useMutation} from '@apollo/client';
import {Button, Form} from 'semantic-ui-react';
import {FormikValues, useFormik} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';

import './RegisterForm.scss';

import {IRegisterUserInput} from '../../../interfaces/interfaces';

import {REGISTER} from '../../../gql/user';

interface IProps {
  setShowLogin: Dispatch<SetStateAction<Boolean>>;
}

const initialValues: IRegisterUserInput = {
  name: '',
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
      .required('El nombre es obligatorio'),
  username: Yup.string()
      .matches(
          /^[a-zA-Z0-9-]*$/,
          'El nombre del usuario no puede tener espacio',
      )
      .required('El nombre de usuario es obligatorio'),
  email: Yup.string()
      .email('El email no es valido')
      .required('El email es obligatorio'),
  password: Yup.string()
      .required('La contraseña es obligatorio')
      .oneOf([Yup.ref('repeatPassword')], 'Las contraseñas no son iguales'),
  repeatPassword: Yup.string()
      .required('La contraseña es obligatorio')
      .oneOf([Yup.ref('password')], 'Las contraseñas no son iguales'),
});

export const RegisterForm = ({setShowLogin}: IProps) => {
  const [register] = useMutation(REGISTER);

  const onSubmit = (values: FormikValues) => {
    register({
      variables: {
        input: {
          name: values.name,
          username: values.username,
          email: values.email,
          password: values.password,
        },
      },
    }).then(({data}) => {
      toast.success('Usuario registrado correctamente');
      setShowLogin(true);
    }).catch((error: ApolloError) => {
      console.log(error.message);
      toast.error(error.message);
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <h2 className="register-form-title">
        Regístrate para ver fotos y vídeos de tus amigos.
      </h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Nombre y apellidos"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && formik.errors.name}
        />

        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && formik.errors.username}
        />

        <Form.Input
          type="text"
          placeholder="Correo electronico"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email}
        />

        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && formik.errors.password}
        />

        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={formik.touched.repeatPassword && formik.errors.repeatPassword}
        />

        <Button type="submit" className="btn-submit">Registrarse</Button>
      </Form>
    </>
  );
};
