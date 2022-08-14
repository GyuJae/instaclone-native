import React from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {colors} from '../../../../../themes';

interface IProps {
  inView: boolean;
}

const Container: ViewStyle = {
  width: '85%',
  flexDirection: 'row',
  marginTop: 7,
};

const Delete: TextStyle = {
  color: colors.lightGray,
  fontWeight: '900',
};

export const IsMe: React.FC<IProps> = ({inView}) => {
  if (!inView) {
    return null;
  }

  return (
    <View style={Container}>
      <TouchableOpacity>
        <Text style={Delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
