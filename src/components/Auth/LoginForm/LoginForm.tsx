import {useContext, useState} from 'react';

import {ApolloError, useMutation} from '@apollo/client';
import {Button, Form} from 'semantic-ui-react';
import {FormikValues, useFormik} from 'formik';
import * as Yup from 'yup';

import './LoginForm.scss';

import {ILoginUserInput} from '../../../interfaces/interfaces';

import {LOGIN} from '../../../gql/user';
import {setToken} from '../../../utils/token';
import {AuthContext} from '../../../context/Auth/AuthContext';

const initialValues: ILoginUserInput = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
      .email('El email no es valido')
      .required('El email es obligatorio'),
  password: Yup.string()
      .required('La contraseña es obligatorio'),
});

export const LoginForm = () => {
  const [notification, setNotification] = useState<String>('');
  const {authLogin} = useContext(AuthContext);

  const [login] = useMutation(LOGIN);

  const onSubmit = (values: FormikValues) => {
    setNotification('');

    login({
      variables: {
        input: {
          email: values.email,
          password: values.password,
        },
      },
    }).then(({data}) => {
      setToken(data.login.token);
      authLogin(
          {
            id: data.login.user.id,
            name: data.login.user.name,
            username: data.login.user.username,
            email: data.login.user.email,
          },
      );
    }).catch((error: ApolloError) => {
      return setNotification(error.message);
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>
        Entra para ver fotos y vídeos de tus amigos
      </h2>

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

      <Button type="submit" className="btn-submit">
        Iniciar sesión
      </Button>

      {
        notification && (
          <p className="submit-error">{notification}</p>
        )
      }
    </Form>
  );
};
