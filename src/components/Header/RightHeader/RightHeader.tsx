import {useContext} from 'react';
import {useQuery} from '@apollo/client';
import {Link} from 'react-router-dom';
import {Icon, Image} from 'semantic-ui-react';

import ImageNoFound from '../../../assets/png/avatar.png';
import './RightHeader.scss';

import {AuthContext} from '../../../context/Auth/AuthContext';
import {GET_USER} from '../../../gql/user';

export const RightHeader = () => {
  const {authState} = useContext(AuthContext);

  const {data, loading, error} = useQuery(GET_USER, {
    variables: {
      username: authState.username,
    },
  });

  if (loading || error) return null;

  const {getUser} = data;

  return (
    <div className="right-header">
      <Link to="/">
        <Icon name="home"/>
      </Link>
      <Icon name="plus"/>
      <Link to={`/${authState.username}`}>
        <Image
          src={getUser.avatar ? getUser.avatar : ImageNoFound}
          avatar
        />
      </Link>
    </div>
  );
};

