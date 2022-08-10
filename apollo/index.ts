import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isLoggedInVar = makeVar<boolean>(false);
export const tokenVar = makeVar<string>('');

export const logInUser = async (token: string) => {
  await AsyncStorage.setItem('token', token);
  isLoggedInVar(true);
  tokenVar(token);
};

export const logOutUser = async () => {
  await AsyncStorage.removeItem('token');
  isLoggedInVar(false);
  tokenVar('');
};

const httpLink = createHttpLink({
  uri: 'https://long-forks-post-119-69-166-205.loca.lt/graphql',
});

const authLink = setContext((_, {headers}) => {
  return {
    ...headers,
    'x-jwt': tokenVar(),
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export * from './mutations/createAccount.mutation';
export * from './mutations/login.mutation';
