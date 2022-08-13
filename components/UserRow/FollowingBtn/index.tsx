import React from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {colors} from '../../../themes';

interface IProps {
  isFollowing: boolean;
  isMe: boolean;
}

const FollowBtnContainer: ViewStyle = {
  paddingHorizontal: 15,
  paddingVertical: 5,
  borderRadius: 5,
  backgroundColor: colors.primary,
};

const FollowBtnText: TextStyle = {
  color: colors.text,
  fontWeight: '500',
};

const UnFollowBtnContainer: ViewStyle = {
  ...FollowBtnContainer,
  backgroundColor: colors.text,
};

const UnFollowBtnText: TextStyle = {
  ...FollowBtnText,
  color: colors.background,
};

export const FollowingBtn: React.FC<IProps> = ({isFollowing, isMe}) => {
  const followBtnPayload = isFollowing ? 'Following' : 'Follow';
  const followBtnContainerStyle = isFollowing
    ? UnFollowBtnContainer
    : FollowBtnContainer;
  const followBtnTextStyle = isFollowing ? UnFollowBtnText : FollowBtnText;

  if (isMe) {
    return null;
  }

  return (
    <TouchableOpacity>
      <View style={followBtnContainerStyle}>
        <Text style={followBtnTextStyle}>{followBtnPayload}</Text>
      </View>
    </TouchableOpacity>
  );
};
