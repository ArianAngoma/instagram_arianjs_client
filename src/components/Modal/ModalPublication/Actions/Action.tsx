import {ApolloError, useMutation, useQuery} from '@apollo/client';
import {Icon} from 'semantic-ui-react';

import './Actions.scss';
import {IPublication} from '../../../../interfaces/interfaces';
import {ADD_LIKE, IS_LIKE} from '../../../../gql/like';

interface IProps {
  publication: IPublication;
}

export const Action = ({publication}: IProps) => {
  const [addLike] = useMutation(ADD_LIKE);
  const {data, loading} = useQuery(IS_LIKE, {
    variables: {
      publicationId: publication.id,
    },
  });

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

  const onDeleteLike = () => {
    console.log('delete');
  };

  if (loading) return null;

  return (
    <div className="actions">
      <Icon
        className={data.isLike ? 'like active' : 'like'}
        name={data.isLike ? 'heart' : 'heart outline'}
        onClick={data.isLike ? onDeleteLike : onAddLike}
      />
      21 Likes
    </div>
  );
};
