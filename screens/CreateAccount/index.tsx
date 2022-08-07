import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ILoggedOutNavigatorParamList} from '../../navigators';
import {colors} from '../../themes';
import AuthLayout from '../../components/auth/AuthLayout';

const Wrapper: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.background,
};

export const CreateAccount: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'createAccount'>
> = () => {
  return (
    <AuthLayout>
      <View style={Wrapper}></View>
    </AuthLayout>
  );
};
