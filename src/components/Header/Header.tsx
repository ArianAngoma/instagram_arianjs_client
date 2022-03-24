import {Link} from 'react-router-dom';
import {Container, Grid, Image} from 'semantic-ui-react';

import Logo from '../../assets/png/instaclone.png';
import './Header.scss';

import {RightHeader} from './RightHeader/RightHeader';
import {Search} from './Search/Search';

export const Header = () => {
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid.Column
            width={3}
            className="header__logo"
          >
            <Link to="/">
              <Image
                src={Logo}
                alt="Instaclone"
              />
            </Link>
          </Grid.Column>

          <Grid.Column
            width={10}
          >
            <Search/>
          </Grid.Column>

          <Grid.Column
            width={3}
          >
            <RightHeader/>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};
