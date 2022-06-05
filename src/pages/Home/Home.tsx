import {Container, Grid} from 'semantic-ui-react';

import './Home.scss';

import {LayoutBasic} from '../../layouts/LayoutBasic';
import {Feed, UsersNotFollowing} from '../../components';

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
            <Feed/>
          </Grid.Column>

          <Grid.Column
            className="home__right"
            width={5}
          >
            <UsersNotFollowing/>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};
