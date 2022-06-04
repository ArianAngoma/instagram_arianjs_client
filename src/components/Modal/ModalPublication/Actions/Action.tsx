import {ApolloError, useMutation} from '@apollo/client';
import {Icon} from 'semantic-ui-react';

import './Actions.scss';
import {IPublication} from '../../../../interfaces/interfaces';
import {ADD_LIKE} from '../../../../gql/like';

interface IProps {
  publication: IPublication;
}

export const Action = ({publication}: IProps) => {
  const [addLike] = useMutation(ADD_LIKE);

  const onAddLike = () => {
    addLike({
      variables: {
        publicationId: publication.id,
      },
    }).then(({data}) => {
      console.log(data);
    }).catch((error: ApolloError) => {
      console.log(error.message);
    });
  };

  return (
    <div className="actions">
      <Icon
        className="like active"
        name="heart"
        onClick={onAddLike}
      />
      21 Likes
    </div>
  );
};
