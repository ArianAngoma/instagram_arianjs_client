import {Dispatch, SetStateAction} from 'react';

import {Button, Form} from 'semantic-ui-react';
import {FormikValues, useFormik} from 'formik';

import {IRegisterUserInput} from '../../../interfaces/interfaces';

import './RegisterForm.scss';

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

export const RegisterForm = (props: IProps) => {
  const {setShowLogin} = props;

  const formik = useFormik({
    initialValues,
    validationSchema: null,
    onSubmit: (formValue: FormikValues) => {
      console.log(formValue);
    },
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
        />

        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />

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

        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
        />

        <Button type="submit" className="btn-submit">Registrarse</Button>
        <Button type="button" onClick={formik.handleReset}>
          Reiniciar formulario
        </Button>
      </Form>
    </>
  );
};
