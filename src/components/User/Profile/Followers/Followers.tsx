import {useQuery} from '@apollo/client';

import './Followers.scss';

import {GET_FOLLOWERS} from '../../../../gql/follow';

interface IProps {
  username: string;
}

export const Followers = ({username}: IProps) => {
  const {
    data: dataFollowers,
    loading: loadingFollowers,
  } = useQuery(GET_FOLLOWERS, {
    variables: {username},
  });

  if (loadingFollowers) return null;

  return (
    <div className="followers">
      <p>
        <span>50</span> publicaciones
      </p>
      <p className="link">
        <span>{dataFollowers.getFollowers.length}</span> seguidores
      </p>
      <p className="link">
        <span>20</span> seguidos
      </p>
    </div>
  );
};
