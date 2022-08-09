import React from 'react';
import {ITabNavigatorParamList, TabNav} from './Tab';
import {IStackNavigatorParamList, StackNav} from './Stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type LoggedNavParamsList = {
  tab: ITabNavigatorParamList;
  stack: IStackNavigatorParamList;
};

const Nav = createNativeStackNavigator<LoggedNavParamsList>();

export const LoggedInNav = () => {
  return (
    <Nav.Navigator screenOptions={{presentation: 'card', headerShown: false}}>
      <Nav.Screen name="tab" component={TabNav} />
      <Nav.Screen name="stack" component={StackNav} />
    </Nav.Navigator>
  );
};
