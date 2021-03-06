import {Grid} from 'semantic-ui-react';

import './Publications.scss';

import {IPublication} from '../../interfaces/interfaces';
import {PreviewPublication} from './PreviewPublication/PreviewPublication';

interface IProps {
  publications: IPublication[];
}

export const Publications = ({publications}: IProps) => {
  return (
    <div className="publications">
      <Grid columns={4}>
        {
          publications.map((publication, index) => (
            <Grid.Column key={index}>
              <PreviewPublication
                publication={publication}
              />
            </Grid.Column>
          ))
        }
      </Grid>
    </div>
  );
};
