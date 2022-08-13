import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text, TextStyle, View, ViewStyle, TouchableOpacity} from 'react-native';
import {logOutUser} from '../../apollo';
import {useMe} from '../../apollo/queries/me.query';
import {ITabNavigatorParamList} from '../../navigators/LoggedInNav/Tab';
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

export const Me: React.FC<
  NativeStackScreenProps<ITabNavigatorParamList, 'me'>
> = ({navigation}) => {
  const {user} = useMe();
  useEffect(() => {
    navigation.setOptions({
      title: user ? user.username : 'loading...',
    });
  }, [navigation, user]);
  return (
    <View style={Wrapper}>
      <TouchableOpacity onPress={logOutUser}>
        <Text style={Title}>Me</Text>
      </TouchableOpacity>
    </View>
  );
};
