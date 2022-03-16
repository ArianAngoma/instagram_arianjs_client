import {useParams} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import {LayoutBasic} from '../../layouts/LayoutBasic';

export const User = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <LayoutBasic/>
      <Container>
        <h1>User</h1>
      </Container>
    </>
  );
};
