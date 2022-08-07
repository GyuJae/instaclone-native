import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ILoggedOutNavigatorParamList} from '../navigators';

export const CreateAccount: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'createAccount'>
> = () => {
  return (
    <View>
      <Text>CreateAccount</Text>
    </View>
  );
};
