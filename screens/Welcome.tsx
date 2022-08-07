import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ILoggedOutNavigatorParamList} from '../navigators';

export const Welcome: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'welcome'>
> = ({navigation}) => {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.push('createAccount')}>
        <Text>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
