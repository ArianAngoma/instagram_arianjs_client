import {Button, Form} from 'semantic-ui-react';
import './EmailForm.scss';

interface IProps {
  setShowModal: (showModal: boolean) => void;
}

export const EmailForm = ({setShowModal}: IProps) => {
  return (
    <Form className="email-form">
      <Form.Input
        placeholder="Escribe tu nuevo email"
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
