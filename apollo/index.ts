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
  uri: 'https://cool-squids-poke-119-69-166-205.loca.lt/graphql',
});

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      'x-jwt': tokenVar(),
    },
  };
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        seeFeed: {
          keyArgs: false,
          merge(
            existing = {
              posts: [],
            },
            incoming = {
              posts: [],
            },
          ) {
            return {
              ...existing,
              ...incoming,
              posts: [...existing.posts, ...incoming.posts],
            };
          },
        },
        seePostLikes: {
          merge(
            existing = {
              users: [],
            },
            incoming = {
              users: [],
            },
          ) {
            return {
              ...existing,
              ...incoming,
              users: [...existing.users, ...incoming.users],
            };
          },
        },
      },
    },
  },
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export * from './mutations/createAccount.mutation';
export * from './mutations/login.mutation';
export * from './mutations/toggleFollow.mutation';
export * from './mutations/toggleLike.mutation';
export * from './mutations/createComment.mutation';

export * from './queries/seePostLikes.query';
export * from './queries/searchPosts.query';
export * from './queries/seePost.query';
export * from './queries/seeComments.query';
