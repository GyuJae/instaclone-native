import {ApolloClient, InMemoryCache, makeVar} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isLoggedInVar = makeVar<boolean>(false);
export const tokenVar = makeVar<string>('');

export const logInUser = async (token: string) => {
  await AsyncStorage.setItem('token', token);
  isLoggedInVar(true);
  tokenVar(token);
};

export const apolloClient = new ApolloClient({
  uri: 'https://chilly-spies-bathe-119-69-166-205.loca.lt/graphql',
  cache: new InMemoryCache(),
});

export * from './mutations/createAccount.mutation';
export * from './mutations/login.mutation';
