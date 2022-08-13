import React from 'react';
import {
  Text,
  TextStyle,
  TouchableOpacity,
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
  handlePressNavigateProfile: () => void;
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

export const UserRow: React.FC<IProps> = ({
  user,
  handlePressNavigateProfile,
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={{...Wrapper, width}}>
      <TouchableOpacity style={Container} onPress={handlePressNavigateProfile}>
        <UserAvatar path={user.avatar} />
        <Text style={Username}>{user.username}</Text>
      </TouchableOpacity>
      <FollowingBtn
        isFollowing={user.isFollowing}
        isMe={user.isMe}
        userId={user.id}
      />
    </View>
  );
};
