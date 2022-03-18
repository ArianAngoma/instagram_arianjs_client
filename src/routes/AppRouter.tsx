import {useContext, useEffect} from 'react';

import {ApolloError, useMutation} from '@apollo/client';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './AppRouter.scss';

import {Auth, Error404, Home, User} from '../pages';
import {AuthContext} from '../context/Auth/AuthContext';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';
import {setToken} from '../utils/token';
import {RENEWTOKEN} from '../gql/user';

export const AppRouter = () => {
  const {authState, authLogin, authCheckingFinish} = useContext(AuthContext);
  const [renewToken] = useMutation(RENEWTOKEN);

  useEffect(() => {
    renewToken().then(({data}) => {
      setToken(data.renewToken.token);
      authLogin({
        id: data.renewToken.user.id,
        name: data.renewToken.user.name,
        username: data.renewToken.user.username,
        email: data.renewToken.user.email,
      });
    }).catch((error: ApolloError) => {
      return authCheckingFinish();
    });
  }, []);

  if (authState.checking) return <div className="spinner"></div>;

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/auth"
            isAuthenticated={!!authState.id}
            component={Auth}
          />

          <PrivateRoute
            exact
            path="/"
            isAuthenticated={!!authState.id}
            component={Home}
          />
          <PrivateRoute
            exact
            path="/:username"
            isAuthenticated={!!authState.id}
            component={User}
          />

          <Route
            exact
            path="*"
            component={Error404}
          />
        </Switch>
      </div>
    </Router>
  );
};
