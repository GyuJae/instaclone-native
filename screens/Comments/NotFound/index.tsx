import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {colors} from '../../../themes';

interface IProps {
  inView: boolean;
}

const Wrapper: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const Message: TextStyle = {
  color: colors.text,
  fontWeight: '600',
};

export const NotFound: React.FC<IProps> = ({inView}) => {
  if (!inView) {
    return null;
  }

  return (
    <View style={Wrapper}>
      <Text style={Message}>No Comments</Text>
    </View>
  );
};
