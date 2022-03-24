import './DescriptionForm.scss';
import {Button, Form, TextArea} from 'semantic-ui-react';

interface IProps {
  setShowModal: (showModal: boolean) => void;
  currentDescription?: string;
  refetch: () => void;
}

export const DescriptionForm = ({
  setShowModal,
  currentDescription,
  refetch,
}: IProps) => {
  return (
    <Form className="description-form">
      <TextArea
        name="description"
      />

      <Button
        type="submit"
        className="btn-submit"
      >
        Actualziar
      </Button>
    </Form>
  );
};
