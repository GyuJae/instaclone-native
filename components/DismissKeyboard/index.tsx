import React, {PropsWithChildren} from 'react';
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';

const Wrapper: ViewStyle = {
  flex: 1,
};

export const DismissKeyboard: React.FC<PropsWithChildren> = ({children}) => {
  const hanleClickDismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={Wrapper}
      onPress={hanleClickDismissKeyboard}
      disabled={Platform.OS === 'web'}>
      {children}
    </TouchableWithoutFeedback>
  );
};
