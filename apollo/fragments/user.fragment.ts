import {gql} from '@apollo/client';

export const USER_FEED_FRAGMENT = gql`
  fragment UserFeedFragment on UserEntity {
    id
    username
    avatar
    isMe
  }
`;
