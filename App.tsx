import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoggedInNav, LoggedOutNav} from './navigators';
import {ApolloProvider, useReactiveVar} from '@apollo/client';
import {apolloClient, cache, isLoggedInVar, tokenVar} from './apollo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageWrapper, persistCache} from 'apollo3-cache-persist';

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const Navigator = isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />;
  const preload = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      isLoggedInVar(true);
      tokenVar(token);
    }
  };

  useEffect(() => {
    (async () => {
      await preload();
      await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
      });
    })();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>{Navigator}</NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
