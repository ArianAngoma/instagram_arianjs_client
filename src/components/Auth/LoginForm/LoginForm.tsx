import {Button, Form} from 'semantic-ui-react';
import {FormikValues, useFormik} from 'formik';

import {ILoginUserInput} from '../../../interfaces/interfaces';

import './LoginForm.scss';

const initialValues: ILoginUserInput = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: null,
    onSubmit: (formData: FormikValues) => {
      console.log(formData);
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
      />

      <Form.Input
        type="password"
        placeholder="Contraseña"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />

      <Button type="submit" className="btn-submit">
        Iniciar sesión
      </Button>
    </Form>
  );
};
