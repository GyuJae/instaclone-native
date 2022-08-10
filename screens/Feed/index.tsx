import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {colors} from '../../themes';
import {useSeeFeed} from '../../apollo/queries/seeFeed.query';
import ScreenLayout from '../../components/ScreenLayout';

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
  const {data, loading} = useSeeFeed(null);
  const handleClickNavigatePhoto = () =>
    navigation.navigate('stack', {screen: 'photo', params: {photoId: 1}});

  return (
    <ScreenLayout loading={loading}>
      <View style={Wrapper}>
        <TouchableOpacity onPress={handleClickNavigatePhoto}>
          <Text style={Title}>Photo</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};
