import React from 'react';
import {TextInput, TextStyle, View, ViewStyle} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ILoggedOutNavigatorParamList} from '../../navigators';
import {colors, spacing} from '../../themes';
import {AuthButton, AuthLayout, InputStyle} from '../../components';

const Wrapper: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  padding: spacing.small,
  width: '100%',
};

export const CreateAccount: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'createAccount'>
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
          placeholder="Username"
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
        <AuthButton disabled={true} text="Create Account" onPress={() => {}} />
      </View>
    </AuthLayout>
  );
};
