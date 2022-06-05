import {useState} from 'react';
import {useQuery} from '@apollo/client';
import {Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import './Feed.scss';

import {IPublication} from '../../../interfaces/interfaces';
import {GET_PUBLICATIONS_FOLLOWING} from '../../../gql/publication';
import ImageNotFound from '../../../assets/png/avatar.png';
import {Action} from '../../Modal/ModalPublication/Actions/Action';
import {
  CommentForm,
} from '../../Modal/ModalPublication/CommentForm/CommentForm';
import {ModalPublication} from '../../Modal/ModalPublication/ModalPublication';

export const Feed = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [
    publicationSelect,
    setPublicationSelect,
  ] = useState<IPublication | null>(null);

  const {data, loading} = useQuery(GET_PUBLICATIONS_FOLLOWING);

  if (loading) return null;

  const openPublication = (publication: IPublication) => {
    setPublicationSelect(publication);
    setShowModal(true);
  };

  return (
    <>
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

              <div
                className="feed__box-photo"
                style={{
                  backgroundImage: `url("${publication.file}")`,
                }}
                onClick={() => openPublication(publication)}
              />

              <div className="feed__box-actions">
                <Action publication={publication}/>
              </div>

              <div className="feed__box-form">
                <CommentForm publication={publication}/>
              </div>
            </div>
          ))
        }
      </div>

      {
        (showModal && publicationSelect) && (
          <ModalPublication
            showModal={showModal}
            setShowModal={setShowModal}
            publication={publicationSelect}
          />
        )
      }
    </>
  );
};
