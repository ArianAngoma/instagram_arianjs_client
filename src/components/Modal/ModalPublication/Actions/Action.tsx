import {useState} from 'react';
import {ApolloError, useMutation, useQuery} from '@apollo/client';
import {Icon} from 'semantic-ui-react';

import './Actions.scss';
import {IPublication} from '../../../../interfaces/interfaces';
import {
  ADD_LIKE,
  COUNT_LIKES,
  DELETE_LIKE,
  IS_LIKE,
} from '../../../../gql/like';

interface IProps {
  publication: IPublication;
}

export const Action = ({publication}: IProps) => {
  const [loadingAction, setLoadingAction] = useState<boolean>(false);

  const [AddLike] = useMutation(ADD_LIKE);
  const [DeleteLike] = useMutation(DELETE_LIKE);

  const {
    data: dataIsLike,
    loading: loadingIsLike,
    refetch: refetchIsLike,
  } = useQuery(IS_LIKE, {
    variables: {
      publicationId: publication.id,
    },
  });

  const {
    data: dataCountLikes,
    loading: loadingCountLike,
    refetch: refetchCountLike,
  } = useQuery(COUNT_LIKES, {
    variables: {
      publicationId: publication.id,
    },
  });

  const onAddLike = () => {
    setLoadingAction(true);
    AddLike({
      variables: {
        publicationId: publication.id,
      },
    }).then(({data}) => {
      console.log(data);
      refetchIsLike();
      refetchCountLike();
      setLoadingAction(false);
    }).catch((error: ApolloError) => {
      console.log(error.message);
      setLoadingAction(false);
    });
  };

  const onDeleteLike = () => {
    setLoadingAction(true);
    DeleteLike({
      variables: {
        publicationId: publication.id,
      },
    }).then(({data}) => {
      console.log(data);
      refetchIsLike();
      refetchCountLike();
      setLoadingAction(false);
    }).catch((error: ApolloError) => {
      console.log(error.message);
      setLoadingAction(false);
    });
  };

  const onAction = () => {
    if (!loadingAction) {
      if (dataIsLike.isLike) {
        onDeleteLike();
      } else {
        onAddLike();
      }
    }
  };

  if (loadingIsLike || loadingCountLike) return null;

  return (
    <div className="actions">
      <Icon
        className={dataIsLike.isLike ? 'like active' : 'like'}
        name={dataIsLike.isLike ? 'heart' : 'heart outline'}
        onClick={onAction}
      />
      {/* eslint-disable-next-line max-len */}
      {dataCountLikes.countLikes} {dataCountLikes.countLikes === 1 ? 'like' : 'likes'}
    </div>
  );
};
