import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {colors, spacing} from '../../../themes';
import {IAuthButtonProps} from './authButton.props';

const ButtonContainer: ViewStyle = {
  display: 'flex',
  backgroundColor: colors.primary,
  padding: spacing.medium,
  borderRadius: 3,
  width: '100%',
};

const ButtonText: TextStyle = {
  color: colors.text,
  fontWeight: '600',
  textAlign: 'center',
};

export const AuthButton: React.FC<IAuthButtonProps> = ({
  disabled,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={ButtonContainer}
      disabled={disabled}
      onPress={onPress}>
      <Text style={ButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};
