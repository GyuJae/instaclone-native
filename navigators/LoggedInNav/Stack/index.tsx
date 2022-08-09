import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile} from '../../../screens';
import {Photo} from '../../../screens/Photo';
import {colors} from '../../../themes';

export type IStackNavigatorParamList = {
  profile: {useId: string};
  photo: {photoId: string};
};

const Stack = createStackNavigator<IStackNavigatorParamList>();

export const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: colors.text,
        headerStyle: {
          shadowColor: colors.gray,
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="photo" component={Photo} />
    </Stack.Navigator>
  );
};
