import {useContext} from 'react';

import {Auth} from '../pages/Auth/Auth';
import {Home} from '../pages/Home/Home';
import {AuthContext} from '../context/Auth/AuthContext';

export const AppRouter = () => {
  const {authState} = useContext(AuthContext);

  return (
    <>
      {!authState.id ? <Auth/> : <Home/>}
    </>
  );
};
