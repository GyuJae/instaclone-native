import {gql} from '@apollo/client';

export const COMMENT_FEED_FRAMENT = gql`
  fragment CommentFeedFragment on CommentEntity {
    id
    payload
    createdAt
    isMine
    user {
      id
      username
      isMe
      avatar
    }
  }
`;
