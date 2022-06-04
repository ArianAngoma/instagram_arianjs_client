import {ApolloError, useMutation, useQuery} from '@apollo/client';
import {Icon} from 'semantic-ui-react';

import './Actions.scss';
import {IPublication} from '../../../../interfaces/interfaces';
import {ADD_LIKE, DELETE_LIKE, IS_LIKE} from '../../../../gql/like';

interface IProps {
  publication: IPublication;
}

export const Action = ({publication}: IProps) => {
  const [AddLike] = useMutation(ADD_LIKE);
  const [DeleteLike] = useMutation(DELETE_LIKE);
  const {data, loading, refetch} = useQuery(IS_LIKE, {
    variables: {
      publicationId: publication.id,
    },
  });

  const onAddLike = () => {
    AddLike({
      variables: {
        publicationId: publication.id,
      },
    }).then(({data}) => {
      console.log(data);
      refetch();
    }).catch((error: ApolloError) => {
      console.log(error.message);
    });
  };

  const onDeleteLike = () => {
    DeleteLike({
      variables: {
        publicationId: publication.id,
      },
    }).then(({data}) => {
      console.log(data);
      refetch();
    }).catch((error: ApolloError) => {
      console.log(error.message);
    });
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
