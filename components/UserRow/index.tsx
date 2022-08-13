import React from 'react';
import {
  Text,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../../themes';
import {UserAvatar} from '../UserAvatar';
import {FollowingBtn} from './FollowingBtn';

interface IProps {
  user: {
    id: number;
    username: string;
    avatar: string | null;
    isFollowing: boolean;
    isMe: boolean;
  };
}

const Wrapper: ViewStyle = {
  flexDirection: 'row',
  paddingHorizontal: 5,
  paddingVertical: 10,
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Container: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

const Username: TextStyle = {
  color: colors.text,
  fontWeight: '500',
};

export const UserRow: React.FC<IProps> = ({user}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={{...Wrapper, width}}>
      <View style={Container}>
        <UserAvatar path={user.avatar} />
        <Text style={Username}>{user.username}</Text>
      </View>
      <FollowingBtn isFollowing={user.isFollowing} isMe={user.isMe} />
    </View>
  );
};
