import {useState} from 'react';
import {ApolloProvider} from '@apollo/client';

import client from './config/apollo';
import {Auth} from './pages/Auth';

export default function App() {
  const [auth, setAuth] = useState<any>();

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth/> : <h1>Login</h1>}
    </ApolloProvider>
  );
}
