import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SelectPhoto} from '../../../screens/SelectPhoto';
import {TakePhoto} from '../../../screens/TakePhoto';
import {colors} from '../../../themes';
import Icon from 'react-native-vector-icons/Ionicons';

export type IUploadTabNavigatorParamList = {
  select: undefined;
  take: undefined;
};

export type IUploadStackNavigatorParamList = {
  select: undefined;
};

const Tab = createMaterialTopTabNavigator<IUploadTabNavigatorParamList>();
const Stack = createStackNavigator<IUploadStackNavigatorParamList>();

export const UploadNav = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarActiveTintColor: colors.text,
        tabBarIndicatorStyle: {
          backgroundColor: colors.text,
          top: 0,
        },
      }}>
      <Tab.Screen name="select">
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: colors.text,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerBackImage: ({tintColor}) => (
                <Icon name="close" color={tintColor} size={28} />
              ),
            }}>
            <Stack.Screen
              name="select"
              options={{title: 'Choose a photo', headerTitleAlign: 'center'}}
              component={SelectPhoto}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="take" component={TakePhoto} />
    </Tab.Navigator>
  );
};
