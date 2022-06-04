import {Icon} from 'semantic-ui-react';

import './Actions.scss';
import {IPublication} from '../../../../interfaces/interfaces';

interface IProps {
  publication: IPublication;
}

export const Action = ({publication}: IProps) => {
  return (
    <div className="actions">
      <Icon
        className="like active"
        name="heart"
        onClick={() => console.log('like')}
      />
      21 Likes
    </div>
  );
};
