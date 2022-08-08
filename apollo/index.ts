import {ApolloClient, InMemoryCache, makeVar} from '@apollo/client';

export const isLoggedInVar = makeVar<boolean>(false);

export const apolloClient = new ApolloClient({
  uri: 'https://happy-yaks-stop-119-69-166-205.loca.lt/graphql',
  cache: new InMemoryCache(),
});

export * from './mutations/createAccount.mutation';
