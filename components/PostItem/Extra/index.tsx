import React from 'react';
import {Text, TextStyle, View, ViewStyle, TouchableOpacity} from 'react-native';
import {ISeeFeedPost} from '../../../apollo/queries/seeFeed.query';
import {colors} from '../../../themes';
import Icon from 'react-native-vector-icons/Ionicons';
import {useToggleLike} from '../../../apollo';

interface IProps {
  post: ISeeFeedPost;
  handleClickNavigatePhoto: () => void;
  handleClickNavigationLikes: () => void;
  handleClickNavigationComments: () => void;
  handleClickNavigationProfile: () => void;
}

const Wrapper: ViewStyle = {
  paddingVertical: 15,
  paddingHorizontal: 5,
};

const Container: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 4,
};

const Action: ViewStyle = {
  marginRight: 8,
};

const Count: TextStyle = {
  color: colors.text,
  marginRight: 5,
  fontWeight: '600',
};

const Caption: TextStyle = {
  color: colors.text,
};

const Username: TextStyle = {
  color: colors.text,
  marginRight: 5,
  fontWeight: '600',
};

export const Extra: React.FC<IProps> = ({
  post,
  handleClickNavigationLikes,
  handleClickNavigationComments,
  handleClickNavigationProfile,
}) => {
  const {toggleLikeMutate} = useToggleLike(post.id, post.isLiked);
  const handlePressToggleLike = () => {
    toggleLikeMutate();
  };

  return (
    <View style={Wrapper}>
      <View style={Container}>
        <TouchableOpacity onPress={handlePressToggleLike}>
          <View style={Action}>
            <Icon
              name={post.isLiked ? 'heart' : 'heart-outline'}
              color={post.isLiked ? colors.warn : colors.text}
              size={22}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Action}>
            <Icon name={'chatbubble-outline'} color={colors.text} size={22} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={Container}>
        <TouchableOpacity onPress={handleClickNavigationLikes}>
          <Text style={Count}>{post.likeCount} likes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClickNavigationComments}>
          <Text style={Count}>{post.commentCount} comments</Text>
        </TouchableOpacity>
      </View>
      <View style={Container}>
        <TouchableOpacity onPress={handleClickNavigationProfile}>
          <Text style={Username}>{post.user.username}</Text>
        </TouchableOpacity>
        <Text style={Caption}>{post.caption}</Text>
      </View>
    </View>
  );
};
