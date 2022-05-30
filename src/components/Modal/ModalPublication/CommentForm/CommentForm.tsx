import {FormikValues, useFormik} from 'formik';
import * as Yup from 'yup';

import './CommentForm.scss';

import {ICommentInput, IPublication} from '../../../../interfaces/interfaces';
import {Button, Form} from 'semantic-ui-react';

interface IProps {
  publication: IPublication;
}

const initialValues: ICommentInput = {
  comment: '',
};

const validationSchema = Yup.object({
  comment: Yup.string().required('Comentario requerido'),
});

export const CommentForm = ({publication}: IProps) => {
  const onSubmit = (values: FormikValues) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form
      className="comment-form"
      onSubmit={formik.handleSubmit}
    >
      <Form.Input
        type="text"
        placeholder="Añade un comentario..."
        name="comment"
        value={formik.values.comment}
        onChange={formik.handleChange}
        error={formik.errors.comment && true}
      />
      <Button type="submit">
        Publicar
      </Button>
    </Form>
  );
};
