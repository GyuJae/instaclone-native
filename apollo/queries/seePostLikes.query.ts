import {gql, useQuery} from '@apollo/client';
import {USER_FRAGEMENT} from '../fragments';

export const useSeePostLikes = (postId: number, offset: number | null) => {
  const {data, loading, refetch, fetchMore, error} = useQuery<
    ISeePostLikes,
    ISeePostLikesVariables
  >(SEE_POST_LIKES_QUERY, {
    variables: {
      input: {
        postId,
        offset,
      },
    },
  });

  return {
    data,
    loading,
    refetch,
    fetchMore,
    error,
  };
};

export const SEE_POST_LIKES_QUERY = gql`
  query SeePostLikes($input: ISeePostLikesInput!) {
    seePostLikes(input: $input) {
      ok
      error
      hasNextPage
      users {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGEMENT}
`;

export interface ISeePostLikesUser {
  id: number;
  username: string;
  avatar: string | null;
  isFollowing: boolean;
  isMe: boolean;
}

export interface ISeePostLikesOutput {
  ok: boolean;
  error: string | null;
  users: ISeePostLikesUser[];
  hasNextPage: boolean;
}

export interface ISeePostLikes {
  seePostLikes: ISeePostLikesOutput;
}

export interface ISeePostLikesInput {
  postId: number;
  offset: number | null;
}

export interface ISeePostLikesVariables {
  input: ISeePostLikesInput;
}
