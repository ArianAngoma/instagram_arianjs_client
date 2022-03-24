import {ApolloError, useMutation} from '@apollo/client';
import {Button, Form} from 'semantic-ui-react';
import {FormikValues, useFormik} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import './WebForm.scss';

import {UPDATE_USER} from '../../../gql/user';

interface IProps {
  setShowModal: (showModal: boolean) => void;
  currentWeb?: string;
  refetch: () => void;
}

export const WebForm = ({setShowModal, currentWeb, refetch}: IProps) => {
  const [updateUser] = useMutation(UPDATE_USER);

  const formik = useFormik({
    initialValues: {
      web: currentWeb || '',
    },
    validationSchema: Yup.object({
      web: Yup.string()
          .matches(
              /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
              'El sitio web es incorrecto',
          )
          .required('El sitio web es obligatorio'),
    }),
    onSubmit: (formData: FormikValues) => {
      updateUser({
        variables: {
          input: formData,
        },
      }).then(({data}) => {
        if (!data.updateUser) {
          toast.error('Error al actualizar tu sitio web');
        } else {
          toast.success('Sitio web actualizado correctamente');
          refetch();
          setShowModal(false);
        }
      }).catch((error: ApolloError) => {
        console.log(error.message);
        toast.error('Error al actualizar tu sitio web');
      });
    },
  });

  return (
    <Form
      className="web-form"
      onSubmit={formik.handleSubmit}
    >
      <Form.Input
        placeholder="URL web"
        name="web"
        value={formik.values.web}
        onChange={formik.handleChange}
        error={formik.touched.web && formik.errors.web}
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
