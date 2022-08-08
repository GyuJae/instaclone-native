import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoggedInNav, LoggedOutNav} from './navigators';
import {ApolloProvider, useReactiveVar} from '@apollo/client';
import {apolloClient, isLoggedInVar} from './apollo';

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const Navigator = isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />;
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>{Navigator}</NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
