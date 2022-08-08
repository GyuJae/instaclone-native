import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoggedOutNav} from './navigators';
import {ApolloProvider} from '@apollo/client';
import {apolloClient} from './apollo';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <LoggedOutNav />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
