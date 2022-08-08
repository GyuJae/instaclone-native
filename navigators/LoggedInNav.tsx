import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feed} from '../screens';

export type ILoggedInNavigatorParamList = {
  feed: undefined;
};

const Tab = createBottomTabNavigator<ILoggedInNavigatorParamList>();

export const LoggedInNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="feed" component={Feed} />
    </Tab.Navigator>
  );
};
