import React from 'react';
import {Text, TextStyle, View, ViewStyle, TouchableOpacity} from 'react-native';
import {logOutUser} from '../../apollo';
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

export const Me = () => {
  return (
    <View style={Wrapper}>
      <TouchableOpacity onPress={logOutUser}>
        <Text style={Title}>Me</Text>
      </TouchableOpacity>
    </View>
  );
};
