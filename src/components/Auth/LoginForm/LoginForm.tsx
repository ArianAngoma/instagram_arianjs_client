import {useState} from 'react';

import {useMutation} from '@apollo/client';
import {Button, Form} from 'semantic-ui-react';
import {FormikValues, useFormik} from 'formik';

import * as Yup from 'yup';

import {ILoginUserInput, IUser} from '../../../interfaces/interfaces';

import './LoginForm.scss';
import {LOGIN} from '../../../gql/user';

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
  const [error, setError] = useState<String>('');
  const [login] = useMutation<IUser, { input: ILoginUserInput }>(LOGIN);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (formData: FormikValues) => {
      setError('');
      try {
        const result = await login({
          variables: {
            input: {
              email: formData.email,
              password: formData.password,
            },
          },
        });
        console.log(result);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
          setError(error.message);
        }
      }
    },
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
        error && (
          <p className="submit-error">{error}</p>
        )
      }
    </Form>
  );
};
