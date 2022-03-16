import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import {getToken} from '../utils/token';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APP_APOLLO_SERVER,
});

const authLink = setContext((_, {headers}) => {
  const token = getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache,
  // link: httpLink,
  link: authLink.concat(httpLink),
});

export default client;
