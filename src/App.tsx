import {ApolloProvider} from '@apollo/client';
import {Button} from 'semantic-ui-react';

import client from './config/apollo';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>App</h1>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
    </ApolloProvider>
  );
}
