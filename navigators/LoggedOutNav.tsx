import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CreateAccount, Login, Welcome} from '../screens';

export type ILoggedOutNavigatorParamList = {
  welcome: undefined;
  login: undefined;
  createAccount: undefined;
};

const Stack = createStackNavigator<ILoggedOutNavigatorParamList>();

export const LoggedOutNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="createAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};
