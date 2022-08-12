import React from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {colors} from '../../../themes';
import {UserAvatar} from '../../UserAvatar';

interface IProps {
  handleClickNavigationProfile: () => void;
  user: {
    id: number;
    username: string;
    avatar: string | null;
    isMe: boolean;
  };
}

const BasicText: TextStyle = {
  color: colors.text,
};
const UserContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 3,
};

const Username: TextStyle = {
  ...BasicText,
  marginLeft: 7,
};

export const Header: React.FC<IProps> = ({
  handleClickNavigationProfile,
  user,
}) => {
  return (
    <TouchableOpacity onPress={handleClickNavigationProfile}>
      <View style={UserContainer}>
        <UserAvatar path={user.avatar} />
        <Text style={Username}>{user.username}</Text>
      </View>
    </TouchableOpacity>
  );
};
