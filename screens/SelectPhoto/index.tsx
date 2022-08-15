import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {colors} from '../../themes';

const Wrapper: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
};

const BasicText: TextStyle = {
  color: colors.text,
};

const Container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const Top: ViewStyle = {
  ...Container,
};

const Bottom: ViewStyle = {
  ...Container,
};

export const SelectPhoto = () => {
  return (
    <View style={Wrapper}>
      <View style={Top}>
        <Text style={BasicText}>Top</Text>
      </View>
      <View style={Bottom}>
        <Text style={BasicText}>Bottom</Text>
      </View>
    </View>
  );
};
