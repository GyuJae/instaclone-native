import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {colors} from '../../themes';

const Wrapper: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  justifyContent: 'center',
  alignItems: 'center',
};

const Title: TextStyle = {
  color: colors.text,
};

export const Photo = () => {
  return (
    <View style={Wrapper}>
      <Text style={Title}>Photo</Text>
    </View>
  );
};
