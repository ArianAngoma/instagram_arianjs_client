import {Button, Form} from 'semantic-ui-react';
import './WebForm.scss';

interface IProps {
  setShowModal: (showModal: boolean) => void;
  currentWeb?: string;
  refetch: () => void;
}

export const WebForm = ({setShowModal, currentWeb, refetch}: IProps) => {
  return (
    <Form
      className="web-form"
    >
      <Form.Input
        placeholder="URL web"
        name="web"
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
