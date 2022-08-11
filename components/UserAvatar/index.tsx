import React from 'react';
import {Image, ImageStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../themes';

interface IProps {
  path: string | null;
}

const Avatar: ImageStyle = {
  width: 43,
  height: 43,
  borderRadius: 50,
};

export const UserAvatar: React.FC<IProps> = ({path}) => {
  if (!path) {
    return <Icon name="person-circle" color={colors.lightGray} size={43} />;
  }

  return <Image style={Avatar} source={{uri: path}} />;
};
