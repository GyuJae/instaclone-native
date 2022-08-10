import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {colors} from '../../themes';

type FeedScreenProps = NativeStackScreenProps<any, 'feed'>;

const Wrapper: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  justifyContent: 'center',
  alignItems: 'center',
};

const Title: TextStyle = {
  color: colors.text,
};

export const Feed = ({navigation}: FeedScreenProps) => {
  const handleClickNavigatePhoto = () =>
    navigation.navigate('stack', {screen: 'photo', params: {photoId: 1}});

  return (
    <View style={Wrapper}>
      <TouchableOpacity onPress={handleClickNavigatePhoto}>
        <Text style={Title}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
};
