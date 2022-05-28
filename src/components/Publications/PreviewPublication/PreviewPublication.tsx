import {useState} from 'react';
import {Image} from 'semantic-ui-react';

import './PreviewPublication.scss';

import {IPublication} from '../../../interfaces/interfaces';
import {ModalPublication} from '../../Modal/ModalPublication/ModalPublication';

interface IProps {
  publication: IPublication;
}

export const PreviewPublication = ({publication}: IProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="preview-publication"
        onClick={() => setShowModal(true)}
      >
        <Image
          className="preview-publication__image"
          src={publication.file}
        />
      </div>

      <ModalPublication
        showModal={showModal}
        setShowModal={setShowModal}
        publication={publication}
      />
    </>
  );
};
