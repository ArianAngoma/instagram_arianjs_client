import {Modal, Grid} from 'semantic-ui-react';

import './ModalPublication.scss';

import {IPublication} from '../../../interfaces/interfaces';
import {CommentForm} from './CommentForm/CommentForm';

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
      <Grid>
        <Grid.Column
          className="modal-publication__left"
          width={10}
          style={{backgroundImage: `url("${publication.file}")`}}
        />
        <Grid.Column
          className="modal-publication__right"
          width={6}
        >
          <div>Comentarios</div>

          <div>Actions</div>

          <CommentForm publication={publication}/>
        </Grid.Column>
      </Grid>
    </Modal>
  );
};
