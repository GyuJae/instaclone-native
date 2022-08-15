import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feed, Me, Notifications, Search} from '../../../screens';
import {colors} from '../../../themes';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, ImageStyle, View} from 'react-native';

const logo = require('../../../assets/logo.png');

export type ITabNavigatorParamList = {
  feed: undefined;
  search: undefined;
  notifications: undefined;
  me: undefined;
  camera: undefined;
};

const Tab = createBottomTabNavigator<ITabNavigatorParamList>();

const InstaLogo: ImageStyle = {
  height: 40,
  width: 120,
};

export const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.gray,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleAlign: 'center',
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
          headerTitle: () => (
            <Image resizeMode="contain" source={logo} style={InstaLogo} />
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
        listeners={({navigation}) => {
          return {
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('upload');
            },
          };
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
