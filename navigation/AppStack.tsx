import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../screens/SettingsScreen';
import RetroOverviewScreen from '../screens/RetroOverviewScreen';
import ActionItemsScreen from '../screens/ActionItemsScreen';

const Tab = createMaterialBottomTabNavigator();

export default function AppStack() {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: colors.primaryContainer}}
      activeColor={colors.onSecondary}
      inactiveColor={colors.secondary}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Retro-Übersicht"
        component={RetroOverviewScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Aktuelle Maßnahmen"
        component={ActionItemsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="clock" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}