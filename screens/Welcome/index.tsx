import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {AuthLayout} from '../../components';
import {ILoggedOutNavigatorParamList} from '../../navigators';
import {colors, spacing} from '../../themes';

const CreateAccountContainer: ViewStyle = {
  display: 'flex',
  backgroundColor: colors.primary,
  padding: spacing.medium,
  borderRadius: 3,
};

const CreateAccountText: TextStyle = {
  color: colors.text,
  fontWeight: 'bold',
  fontSize: 17,
};

const LoginContainer: ViewStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: spacing.small,
  padding: spacing.medium,
};

const LoginText: TextStyle = {
  color: colors.primary,
  fontWeight: 'bold',
};

export const Welcome: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'welcome'>
> = ({navigation}) => {
  const handleClickNavigateCreateAccount = () =>
    navigation.push('createAccount');
  const handleClickNavigateLogin = () => navigation.push('login');

  return (
    <AuthLayout>
      <View>
        <TouchableOpacity onPress={handleClickNavigateCreateAccount}>
          <View style={CreateAccountContainer}>
            <Text style={CreateAccountText}>Create Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClickNavigateLogin}>
          <View style={LoginContainer}>
            <Text style={LoginText}>Log In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
};
