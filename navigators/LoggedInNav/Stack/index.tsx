import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Comments, Likes, Profile} from '../../../screens';
import {Photo} from '../../../screens/Photo';
import {colors} from '../../../themes';

export type IStackNavigatorParamList = {
  profile: {useId: string};
  photo: {postId: string};
  likes: {postId: string};
  comments: {postId: string};
};

const Stack = createStackNavigator<IStackNavigatorParamList>();

export const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerBackTitleVisible: false,
        headerTintColor: colors.text,
        headerStyle: {
          shadowColor: colors.gray,
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="photo" component={Photo} />
      <Stack.Screen name="likes" component={Likes} />
      <Stack.Screen name="comments" component={Comments} />
    </Stack.Navigator>
  );
};
