import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CreateAccount, Login, Welcome} from '../screens';
import {colors} from '../themes';

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
      <Stack.Screen
        name="welcome"
        options={{
          headerShown: false,
        }}
        component={Welcome}
      />
      <Stack.Screen
        name="login"
        options={{
          headerTitle: () => false,
          headerTintColor: 'white',
          headerTransparent: true,
        }}
        component={Login}
      />
      <Stack.Screen
        name="createAccount"
        options={{
          headerTitle: () => false,
          headerTintColor: 'white',
          headerTransparent: true,
        }}
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
};
