import {Modal} from 'semantic-ui-react';

import './ModalBasic.scss';

interface IProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void ;
  title?: string;
  children: JSX.Element | JSX.Element[] | null;
}

export const ModalBasic = (props: IProps) => {
  const {showModal, setShowModal, title, children} = props;

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <Modal
      size="mini"
      open={showModal}
      onClose={onClose}
      className="modal-basic"
    >
      {
        (title) && (
          <Modal.Header>{title}</Modal.Header>
        )
      }

      {children}
    </Modal>
  );
};
