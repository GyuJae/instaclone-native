import {gql} from '@apollo/client';

export const USER_FEED_FRAGMENT = gql`
  fragment UserFeedFragment on UserEntity {
    id
    username
    avatar
    isMe
  }
`;

export const USER_FRAGEMENT = gql`
  fragment UserFragment on UserEntity {
    id
    username
    avatar
    isFollowing
    isMe
  }
`;
