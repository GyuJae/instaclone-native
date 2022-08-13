import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
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
  marginTop: 10,
};

export const Loading: React.FC<IProps> = ({inView}) => {
  if (!inView) {
    return null;
  }
  return (
    <View style={Wrapper}>
      <ActivityIndicator size={'large'} />
      <Text style={Message}>Searching...</Text>
    </View>
  );
};
