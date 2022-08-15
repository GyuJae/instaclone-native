import React from 'react';
import {ITabNavigatorParamList, TabNav} from './Tab';
import {IStackNavigatorParamList, StackNav} from './Stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IUploadTabNavigatorParamList, UploadNav} from './UploadNav';

export type LoggedNavParamsList = {
  tab: ITabNavigatorParamList;
  stack: IStackNavigatorParamList;
  upload: IUploadTabNavigatorParamList;
};

const Nav = createNativeStackNavigator<LoggedNavParamsList>();

export const LoggedInNav = () => {
  return (
    <Nav.Navigator screenOptions={{presentation: 'card', headerShown: false}}>
      <Nav.Screen name="tab" component={TabNav} />
      <Nav.Screen name="stack" component={StackNav} />
      <Nav.Screen name="upload" component={UploadNav} />
    </Nav.Navigator>
  );
};
