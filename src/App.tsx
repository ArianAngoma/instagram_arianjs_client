import {ApolloProvider} from '@apollo/client';
import {ToastContainer} from 'react-toastify';

import client from './config/apollo';
import {AuthProvider} from './context/Auth/AuthProvider';
import {AppRouter} from './routes/AppRouter';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppRouter/>
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
      </AuthProvider>
    </ApolloProvider>
  );
}
