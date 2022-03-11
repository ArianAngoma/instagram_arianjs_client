import {useEffect, useState} from 'react';
import {ApolloProvider} from '@apollo/client';
import {ToastContainer} from 'react-toastify';

import client from './config/apollo';
import {Auth} from './pages/Auth';
import {getToken} from './utils/token';

export default function App() {
  const [auth, setAuth] = useState<string | null>();

  useEffect(() => {
    const token = getToken();
    setAuth(token);
  }, []);

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth/> : <h1>Login</h1>}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ApolloProvider>
  );
}
