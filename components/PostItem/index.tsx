import React from 'react';
import {
  Image,
  Text,
  TextStyle,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import {ISeeFeedPost} from '../../apollo/queries/seeFeed.query';
import {colors} from '../../themes';
import {UserAvatar} from '../UserAvatar';

interface IProps {
  post: ISeeFeedPost;
  handleClickNavigationProfile: () => void;
  handleClickNavigatePhoto: () => void;
}

const BasicText: TextStyle = {
  color: colors.text,
};

const Container: ViewStyle = {};

const UserContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 3,
};

const Username: TextStyle = {
  ...BasicText,
  marginLeft: 7,
};

const Caption: TextStyle = {
  ...BasicText,
};

export const PostItem: React.FC<IProps> = ({
  post,
  handleClickNavigationProfile,
  handleClickNavigatePhoto,
}) => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={Container}>
      <TouchableOpacity onPress={handleClickNavigationProfile}>
        <View style={UserContainer}>
          <UserAvatar path={post.user.avatar} />
          <Text style={Username}>{post.user.username}</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={{uri: post.files[0].posterPath}}
        style={{
          width,
          height: height - 400,
        }}
        resizeMode="cover"
      />
    </View>
  );
};
