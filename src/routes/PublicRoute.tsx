import {Redirect, Route} from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: any) => {
  return (
    <Route {...rest}
      component={(props: any) => (
             (!isAuthenticated) ?
               (<Component {...props}/>) :
               (<Redirect to="/"/>)
      )}
    />
  );
};
