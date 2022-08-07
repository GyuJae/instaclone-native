import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ILoggedOutNavigatorParamList} from '../../navigators';
import {colors, spacing} from '../../themes';

const logo = require('../../assets/logo.png');

const Wrapper: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.background,
};

const InstaLogo: ImageStyle = {
  maxWidth: '50%',
  height: 200,
};

const CreateAccountContainer: ViewStyle = {
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
  marginTop: spacing.medium,
};

const LoginText: TextStyle = {
  color: colors.primary,
  fontWeight: 'bold',
};

export const Welcome: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'welcome'>
> = ({navigation}) => {
  return (
    <View style={Wrapper}>
      <Image resizeMode="contain" source={logo} style={InstaLogo} />
      <View>
        <TouchableOpacity onPress={() => navigation.push('createAccount')}>
          <View style={CreateAccountContainer}>
            <Text style={CreateAccountText}>Create Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('login')}>
          <View style={LoginContainer}>
            <Text style={LoginText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
