import {Container} from 'semantic-ui-react';

import './Home.scss';

import {LayoutBasic} from '../../layouts/LayoutBasic';

export const Home = () => {
  return (
    <>
      <LayoutBasic/>
      <Container className="layout-basic">
        <h1>Home</h1>
      </Container>

    </>
  );
};
