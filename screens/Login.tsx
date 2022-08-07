import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ILoggedOutNavigatorParamList} from '../navigators';
import {Text, View} from 'react-native';

export const Login: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'login'>
> = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};
