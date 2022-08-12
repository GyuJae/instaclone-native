import {gql, useQuery} from '@apollo/client';
import {
  COMMENT_FEED_FRAMENT,
  POST_FEED_FRAGMENT,
  USER_FEED_FRAGMENT,
} from '../fragments';

export const useSeeFeed = (lastId: number | null) => {
  const {data, loading, refetch} = useQuery<ISeeFeed, ISeeFeedVariables>(
    SEE_FEED_QUERY,
    {
      variables: {
        input: {
          lastId,
        },
      },
    },
  );

  return {
    data,
    loading,
    refetch,
  };
};

export const SEE_FEED_QUERY = gql`
  query SeeFeed($input: ISeeFeedInput!) {
    seeFeed(input: $input) {
      ok
      error
      posts {
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

export interface ISeeFeedPost {
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

export interface ISeeFeedOutput {
  ok: boolean;
  error: string | null;
  posts: ISeeFeedPost[];
}

export interface ISeeFeed {
  seeFeed: ISeeFeedOutput;
}

export interface ISeeFeedInput {
  lastId: number | null;
}

export interface ISeeFeedVariables {
  input: ISeeFeedInput;
}
