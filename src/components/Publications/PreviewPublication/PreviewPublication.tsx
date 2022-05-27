import {Image} from 'semantic-ui-react';

import './PreviewPublication.scss';

import {IPublications} from '../../../interfaces/interfaces';

interface IProps {
  publication: IPublications;
}

export const PreviewPublication = ({publication}: IProps) => {
  return (
    <div className="preview-publication">
      <Image
        className="preview-publication__image"
        src={publication.file}
      />
    </div>
  );
};
