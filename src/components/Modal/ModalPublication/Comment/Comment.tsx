import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {Image} from 'semantic-ui-react';

import './Comment.scss';

import {IComment, IPublication} from '../../../../interfaces/interfaces';
import {GET_COMMENTS} from '../../../../gql/comment';
import ImageNotFound from '../../../../assets/png/avatar.png';

interface IProps {
  publication: IPublication;
}

export const Comment = ({publication}: IProps) => {
  const {data, loading, startPolling, stopPolling} = useQuery(GET_COMMENTS, {
    variables: {
      publicationId: publication.id,
    },
  });

  useEffect(() => {
    startPolling(1000);
    return () => stopPolling();
  }, [startPolling, stopPolling]);

  if (loading) return null;

  return (
    <div className="comments">
      {
        data.getComments.map((comment: IComment, index: number) => (
          <Link
            key={index}
            to={`/${comment.author.username}`}
            className="comment"
          >
            <Image src={comment.author.avatar || ImageNotFound} avatar/>

            <div>
              <p>{comment.author.username}</p>
              <p>{comment.comment}</p>
            </div>
          </Link>
        ))
      }
    </div>
  );
};
