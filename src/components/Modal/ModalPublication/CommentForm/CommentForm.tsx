import './CommentForm.scss';

import {IPublication} from '../../../../interfaces/interfaces';
import {Button, Form} from 'semantic-ui-react';

interface IProps {
  publication: IPublication;
}

export const CommentForm = ({publication}: IProps) => {
  return (
    <div>
      <Form className="comment-form">
        <Form.Input
          placeholder="Añade un comentario..."
          name="comment"
        />
        <Button type="submit">
          Publicar
        </Button>
      </Form>
    </div>
  );
};
