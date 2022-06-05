import {useQuery} from '@apollo/client';
import {Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import './Feed.scss';

import {IPublication} from '../../../interfaces/interfaces';
import {GET_PUBLICATIONS_FOLLOWING} from '../../../gql/publication';
import ImageNotFound from '../../../assets/png/avatar.png';

export const Feed = () => {
  const {data, loading} = useQuery(GET_PUBLICATIONS_FOLLOWING);

  if (loading) return null;

  return (
    <div className="feed">
      {
        data.getPublicationsFollowing.map((
            publication: IPublication, index: number,
        ) => (
          <div
            key={index}
            className="feed__box"
          >
            <Link to={`/${publication.author.username}`}>
              <div className="feed__box-user">
                <Image
                  src={publication.author.avatar || ImageNotFound}
                  avatar
                />
                <span>{publication.author.name}</span>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  );
};
