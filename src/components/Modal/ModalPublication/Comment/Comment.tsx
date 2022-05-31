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
  const {data, loading} = useQuery(GET_COMMENTS, {
    variables: {
      publicationId: publication.id,
    },
  });

  if (loading) return null;

  console.log(data);

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
