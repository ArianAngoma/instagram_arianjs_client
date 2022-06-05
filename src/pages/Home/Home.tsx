import {Container, Grid} from 'semantic-ui-react';

import './Home.scss';

import {LayoutBasic} from '../../layouts/LayoutBasic';

export const Home = () => {
  return (
    <>
      <LayoutBasic/>

      <Container className="layout-basic">
        <Grid className="home">
          <Grid.Column
            className="home__left"
            width={11}
          >
            <h2>Feed</h2>
          </Grid.Column>

          <Grid.Column
            className="home__right"
            width={5}
          >
            <h2>Usuarios no seguidos</h2>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};
