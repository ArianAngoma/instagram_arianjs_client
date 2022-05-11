import {useEffect, useState} from 'react';

import {useQuery} from '@apollo/client';

import './Followers.scss';
import {GET_FOLLOWERS} from '../../../../gql/follow';
import {ModalBasic} from '../../../Modal/ModalBasic/ModalBasic';
import {ListUsers} from '../../ListUsers/ListUsers';

interface IProps {
  username: string;
}

export const Followers = ({username}: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState<string>('');
  const [childrenModal, setChildrenModal] = useState<any>(null);

  const {
    data: dataFollowers,
    loading: loadingFollowers,
    startPolling: startPollingFollowers,
    stopPolling: stopPollingFollowers,
  } = useQuery(GET_FOLLOWERS, {
    variables: {username},
  });

  useEffect(() => {
    startPollingFollowers(1000);
    return () => stopPollingFollowers();
  }, [startPollingFollowers, stopPollingFollowers]);

  const openFollowers = () => {
    setTitleModal('Seguidores');
    setChildrenModal(
        <ListUsers
          users={dataFollowers.getFollowers}
          setShowModal={setShowModal}
        />,
    );
    setShowModal(true);
  };

  if (loadingFollowers) return null;

  return (
    <>
      <div className="followers">
        <p>
          <span>50</span> publicaciones
        </p>
        <p
          className="link"
          onClick={openFollowers}
        >
          <span>{dataFollowers.getFollowers.length}</span> seguidores
        </p>
        <p className="link">
          <span>20</span> seguidos
        </p>
      </div>
      <ModalBasic
        showModal={showModal}
        setShowModal={setShowModal}
        title={titleModal}
      >
        {childrenModal}
      </ModalBasic>
    </>
  );
};
