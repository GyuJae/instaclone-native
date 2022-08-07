import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import AuthLayout from '../../components/auth/AuthLayout';
import {ILoggedOutNavigatorParamList} from '../../navigators';
import {colors, spacing} from '../../themes';

const CreateAccountContainer: ViewStyle = {
  display: 'flex',
  backgroundColor: colors.primary,
  padding: spacing.medium,
  borderRadius: 5,
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
  return (
    <AuthLayout>
      <View>
        <TouchableOpacity onPress={() => navigation.push('createAccount')}>
          <View style={CreateAccountContainer}>
            <Text style={CreateAccountText}>Create Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('login')}>
          <View style={LoginContainer}>
            <Text style={LoginText}>Log In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
};
