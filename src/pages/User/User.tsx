import {useParams} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import {useQuery} from '@apollo/client';

import {IParams} from '../../interfaces/interfaces';

import {LayoutBasic} from '../../layouts/LayoutBasic';
import {Profile} from '../../components';
import {GET_PUBLICATIONS} from '../../gql/publication';

export const User = () => {
  const {username} = useParams<IParams>();

  const {data, loading} = useQuery(GET_PUBLICATIONS, {
    variables: {
      username,
    },
  });

  if (loading) return null;

  return (
    <>
      <LayoutBasic/>
      <Container>
        <Profile
          username={username}
          totalPublications={data.getPublications.length}
        />
      </Container>
    </>
  );
};
