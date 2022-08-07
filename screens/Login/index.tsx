import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ILoggedOutNavigatorParamList} from '../../navigators';
import {Text, View} from 'react-native';
import AuthLayout from '../../components/auth/AuthLayout';

export const Login: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'login'>
> = () => {
  return (
    <AuthLayout>
      <View>
        <Text>Login</Text>
      </View>
    </AuthLayout>
  );
};
