import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';

console.log(import.meta.env.VITE_APP_APOLLO_SERVER);
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APP_APOLLO_SERVER,
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache,
  link: httpLink,
});

export default client;
