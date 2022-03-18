import {useParams} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import {IParams} from '../../interfaces/interfaces';

import {LayoutBasic} from '../../layouts/LayoutBasic';
import {Profile} from '../../components';

export const User = () => {
  const {username} = useParams<IParams>();
  return (
    <>
      <LayoutBasic/>
      <Container>
        <Profile username={username}/>
      </Container>
    </>
  );
};
