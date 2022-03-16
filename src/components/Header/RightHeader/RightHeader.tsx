import {useContext} from 'react';

import {Link} from 'react-router-dom';
import {Icon, Image} from 'semantic-ui-react';

import ImageNoFound from '../../../assets/png/avatar.png';
import './RightHeader.scss';

import {AuthContext} from '../../../context/Auth/AuthContext';

export const RightHeader = () => {
  const {authState} = useContext(AuthContext);

  return (
    <div className="right-header">
      <Link to="/">
        <Icon name="home"/>
      </Link>
      <Icon name="plus"/>
      <Link to={`/${authState.username}`}>
        <Image
          src={ImageNoFound}
          avatar
        />
      </Link>
    </div>
  );
};
