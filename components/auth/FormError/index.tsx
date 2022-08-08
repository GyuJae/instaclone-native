import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {colors, spacing} from '../../../themes';

interface IProps {
  text: string | null;
  inView: boolean;
}

const Container: ViewStyle = {
  width: '100%',
  paddingVertical: spacing.small,
};

const FormErrorText: TextStyle = {
  fontWeight: '500',
  color: colors.warn,
};

export const FormError: React.FC<IProps> = ({text, inView}) => {
  if (!inView) return null;
  return (
    <View style={Container}>
      <Text style={FormErrorText}>{text}</Text>
    </View>
  );
};
