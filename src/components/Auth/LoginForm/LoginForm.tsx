import {useContext, useState} from 'react';

import {useMutation} from '@apollo/client';
import {Button, Form} from 'semantic-ui-react';
import {FormikValues, useFormik} from 'formik';
import * as Yup from 'yup';

import './LoginForm.scss';

import {ILoginUserInput, IResultAuth} from '../../../interfaces/interfaces';

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

  const [login] = useMutation<{ login: IResultAuth }, { input: ILoginUserInput }>(LOGIN);

  const onSubmit = async (values: FormikValues) => {
    setNotification('');

    try {
      const {data} = await login({
        variables: {
          input: {
            email: values.email,
            password: values.password,
          },
        },
      });
      setToken(data!.login.token);
      authLogin(data!.login.user.id, data!.login.user.name);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setNotification(error.message);
      }
    }
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
