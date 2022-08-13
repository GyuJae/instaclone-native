import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {colors} from '../../../themes';

interface IProps {
  inView: boolean;
}

const Wrapper: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  justifyContent: 'center',
  alignContent: 'center',
};

const Message: TextStyle = {
  fontWeight: '500',
  color: colors.text,
};

export const NotCalled: React.FC<IProps> = ({inView}) => {
  if (!inView) {
    return null;
  }
  return (
    <View style={Wrapper}>
      <Text style={Message}>Search by keyword</Text>
    </View>
  );
};
