import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {IStackNavigatorParamList} from '../../navigators/LoggedInNav/Stack';
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

export const Profile: React.FC<
  StackScreenProps<IStackNavigatorParamList, 'profile'>
> = ({navigation, route}) => {
  const {
    params: {username},
  } = route;
  useEffect(() => {
    navigation.setOptions({
      title: username,
    });
  }, [navigation, username]);
  return (
    <View style={Wrapper}>
      <Text style={Title}>Profile</Text>
    </View>
  );
};
