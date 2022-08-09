import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feed, Me, Notifications, Profile, Search} from '../../../screens';
import {colors} from '../../../themes';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

export type ITabNavigatorParamList = {
  feed: undefined;
  search: undefined;
  notifications: undefined;
  me: undefined;
  camera: undefined;
};

const Tab = createBottomTabNavigator<ITabNavigatorParamList>();

export const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.gray,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.text,
      }}>
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'search' : 'search-outline'}
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="camera"
        component={View}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'camera' : 'camera-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="me"
        component={Me}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
