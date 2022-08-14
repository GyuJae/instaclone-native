import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  TextStyle,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import {ISeeCommentsComment} from '../../../../apollo';
import {UserAvatar} from '../../../../components';
import {colors} from '../../../../themes';
import {IsMe} from './IsMe';

interface IProps {
  comment: ISeeCommentsComment;
  handleRefetch: () => void;
}

const Wrapper: ViewStyle = {
  flexDirection: 'row',
};

const Container: ViewStyle = {
  width: '100%',
};

const Username: TextStyle = {
  color: colors.text,
  fontWeight: '600',
};

const PayloadContainer: ViewStyle = {
  width: '85%',
};

const Payload: TextStyle = {
  color: colors.lightGray,
};

export const Item: React.FC<IProps> = ({comment, handleRefetch}) => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const handleNavigateProfile = () => {
    // @ts-ignore
    navigation.navigate('profile', {
      userId: comment.user.id,
      username: comment.user.username,
    });
  };

  return (
    <View style={{...Wrapper, width}}>
      <TouchableOpacity onPress={handleNavigateProfile}>
        <UserAvatar path={comment.user.avatar} />
      </TouchableOpacity>
      <View style={Container}>
        <TouchableOpacity onPress={handleNavigateProfile}>
          <Text style={Username}>{comment.user.username}</Text>
        </TouchableOpacity>
        <View style={PayloadContainer}>
          <Text style={Payload}>{comment.payload}</Text>
        </View>
        <IsMe
          inView={comment.isMine}
          commentId={comment.id}
          handleRefetch={handleRefetch}
        />
      </View>
    </View>
  );
};
