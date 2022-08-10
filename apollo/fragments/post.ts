import {gql} from '@apollo/client';

export const POST_FEED_FRAGMENT = gql`
  fragment PostFeedFragment on PostEntity {
    id
    isLiked
    likeCount
    commentCount
    files {
      id
      posterPath
    }
  }
`;
