import {useEffect, useState} from 'react';

import {useQuery} from '@apollo/client';

import './Followers.scss';
import {GET_FOLLOWERS, GET_FOLLOWING} from '../../../../gql/follow';
import {ModalBasic} from '../../../Modal/ModalBasic/ModalBasic';
import {ListUsers} from '../../ListUsers/ListUsers';

interface IProps {
  username: string;
  totalPublications: number;
}

export const Followers = ({username, totalPublications}: IProps) => {
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

  const {
    data: dataFollowing,
    loading: loadingFollowing,
    startPolling: startPollingFollowing,
    stopPolling: stopPollingFollowing,
  } = useQuery(GET_FOLLOWING, {
    variables: {username},
  });

  useEffect(() => {
    startPollingFollowers(1000);
    return () => stopPollingFollowers();
  }, [startPollingFollowers, stopPollingFollowers]);

  useEffect(() => {
    startPollingFollowing(1000);
    return () => stopPollingFollowing();
  }, [startPollingFollowing, stopPollingFollowing]);

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

  const openFollowing = () => {
    setTitleModal('Usuarios seguidos');
    setChildrenModal(
        <ListUsers
          users={dataFollowing.getFollowing}
          setShowModal={setShowModal}
        />,
    );
    setShowModal(true);
  };

  if (loadingFollowers || loadingFollowing) return null;

  return (
    <>
      <div className="followers">
        <p>
          <span>{totalPublications}</span> publicaciones
        </p>
        <p
          className="link"
          onClick={openFollowers}
        >
          <span>{dataFollowers.getFollowers.length}</span> seguidores
        </p>
        <p
          className="link"
          onClick={openFollowing}
        >
          <span>{dataFollowing.getFollowing.length}</span> seguidos
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
