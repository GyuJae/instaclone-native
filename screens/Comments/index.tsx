import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {useSeeComments} from '../../apollo';
import {IStackNavigatorParamList} from '../../navigators/LoggedInNav/Stack';
import {colors} from '../../themes';

const Wrapper: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  justifyContent: 'center',
  alignItems: 'center',
};

const Title: TextStyle = {
  color: colors.text,
};

export const Comments: React.FC<
  StackScreenProps<IStackNavigatorParamList, 'comments'>
> = ({route}) => {
  const {
    params: {postId},
  } = route;
  const {comments, error} = useSeeComments(postId);
  console.log(comments, error);
  return (
    <View style={Wrapper}>
      <Text style={Title}>Comments</Text>
    </View>
  );
};
