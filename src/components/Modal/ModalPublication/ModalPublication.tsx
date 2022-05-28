import {Modal, Grid} from 'semantic-ui-react';

import './ModalPublication.scss';

import {IPublication} from '../../../interfaces/interfaces';

interface IProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  publication: IPublication;
}

export const ModalPublication = ({
  showModal,
  setShowModal,
  publication,
}: IProps) => {
  const onClose = () => setShowModal(false);

  return (
    <Modal
      open={showModal}
      onClose={onClose}
      className="modal-publication"
    >
      <Grid.Column
        className="modal-publication__left"
        width={10}
      >
        <h3>Imagen</h3>
      </Grid.Column>
      <Grid.Column
        className="modal-publication__right"
        width={6}
      >
        <h3>Comentarios</h3>
      </Grid.Column>
    </Modal>
  );
};
