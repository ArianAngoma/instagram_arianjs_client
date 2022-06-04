import {Grid, Modal} from 'semantic-ui-react';

import './ModalPublication.scss';

import {IPublication} from '../../../interfaces/interfaces';
import {CommentForm} from './CommentForm/CommentForm';
import {Comment} from './Comment/Comment';
import {Action} from './Actions/Action';

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
          <Comment publication={publication}/>

          <Action publication={publication}/>

          <CommentForm publication={publication}/>
        </Grid.Column>
      </Grid>
    </Modal>
  );
};
