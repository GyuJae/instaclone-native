import React, {PropsWithChildren} from 'react';
import {
  Image,
  ImageStyle,
  KeyboardAvoidingView,
  Platform,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../../../themes';
import {DismissKeyboard} from '../../DismissKeyboard';

const logo = require('../../../assets/logo.png');

const Container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.background,
  width: '100%',
};

const InstaLogo: ImageStyle = {
  maxWidth: '50%',
  height: 200,
};

export const AuthLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        style={Container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}>
        <View style={Container}>
          <Image resizeMode="contain" source={logo} style={InstaLogo} />
          {children}
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};
