import {gql, useQuery} from '@apollo/client';
import {
  COMMENT_FEED_FRAMENT,
  POST_FEED_FRAGMENT,
  USER_FEED_FRAGMENT,
} from '../fragments';

export const useSeePost = (postId: number) => {
  const {data, loading, refetch, fetchMore, error} = useQuery<
    ISeePost,
    ISeePostVariables
  >(SEE_POST_QUERY, {
    variables: {
      input: {
        postId,
      },
    },
  });

  return {
    post: data?.seePost.post,
    loading,
    refetch,
    fetchMore,
    error,
  };
};

export const SEE_POST_QUERY = gql`
  query seePost($input: ISeePostInput!) {
    seePost(input: $input) {
      post {
        ...PostFeedFragment
        user {
          ...UserFeedFragment
        }
        comments {
          ...CommentFeedFragment
        }
      }
    }
  }
  ${POST_FEED_FRAGMENT}
  ${COMMENT_FEED_FRAMENT}
  ${USER_FEED_FRAGMENT}
`;

export interface ISeePostPost {
  id: number;
  caption: string;
  isLiked: boolean;
  likeCount: number;
  commentCount: number;
  files: {
    id: number;
    posterPath: string;
  }[];
  user: {
    id: number;
    username: string;
    avatar: string | null;
    isMe: boolean;
  };
  comments: {
    id: number;
    payload: string;
    createdAt: string;
    isMine: boolean;
    user: {
      id: number;
      username: string;
      isMe: boolean;
      avatar: string | null;
    };
  }[];
}

export interface ISeePostOutput {
  post: ISeePostPost;
}

export interface ISeePost {
  seePost: ISeePostOutput;
}

export interface ISeePostInput {
  postId: number;
}

export interface ISeePostVariables {
  input: ISeePostInput;
}
