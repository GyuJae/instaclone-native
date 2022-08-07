import React, {PropsWithChildren} from 'react';
import {Image, ImageStyle, View, ViewStyle} from 'react-native';
import {colors} from '../../../themes';

const logo = require('../../../assets/logo.png');

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

const AuthLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <View style={Wrapper}>
      <Image resizeMode="contain" source={logo} style={InstaLogo} />
      {children}
    </View>
  );
};

export default AuthLayout;
