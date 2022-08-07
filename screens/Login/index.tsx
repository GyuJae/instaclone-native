import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ILoggedOutNavigatorParamList} from '../../navigators';
import {Text, TextInput, View, ViewStyle} from 'react-native';
import {AuthButton, AuthLayout, InputStyle} from '../../components';
import {spacing} from '../../themes';

const Wrapper: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  padding: spacing.small,
  width: '100%',
};

export const Login: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'login'>
> = () => {
  return (
    <AuthLayout>
      <View style={Wrapper}>
        <TextInput
          style={InputStyle}
          placeholder="Email"
          placeholderTextColor="gray"
          returnKeyType="next"
        />
        <TextInput
          style={InputStyle}
          placeholder="Password"
          placeholderTextColor="gray"
          textContentType="password"
          returnKeyType="done"
        />
        <AuthButton disabled={true} text="Log In" onPress={() => {}} />
      </View>
    </AuthLayout>
  );
};
