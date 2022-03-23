import {Button, Form} from 'semantic-ui-react';
import {FormikValues, useFormik} from 'formik';
import * as Yup from 'yup';
import './EmailForm.scss';

interface IProps {
  setShowModal: (showModal: boolean) => void;
  currentEmail?: string;
}

export const EmailForm = ({setShowModal, currentEmail}: IProps) => {
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
      console.log(formData);
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
