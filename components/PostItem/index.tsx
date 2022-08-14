import React from 'react';
import {View, ViewStyle} from 'react-native';
import {ISeeFeedPost} from '../../apollo/queries/seeFeed.query';
import {Extra} from './Extra';
import {Files} from './Files';
import {Header} from './Header';

interface IProps {
  post: ISeeFeedPost;
  handleClickNavigationProfile: () => void;
  handleClickNavigationLikes: () => void;
  handleClickNavigationComments: () => void;
}

const Container: ViewStyle = {};

export const PostItem: React.FC<IProps> = ({
  post,
  handleClickNavigationProfile,
  handleClickNavigationLikes,
  handleClickNavigationComments,
}) => {
  return (
    <View style={Container}>
      <Header
        user={post.user}
        handleClickNavigationProfile={handleClickNavigationProfile}
      />
      <Files files={post.files} />
      <Extra
        post={post}
        handleClickNavigationLikes={handleClickNavigationLikes}
        handleClickNavigationComments={handleClickNavigationComments}
        handleClickNavigationProfile={handleClickNavigationProfile}
      />
    </View>
  );
};
