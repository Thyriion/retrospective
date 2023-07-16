import {StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../../screens/profile/SettingsScreen';
import RetroOverviewScreen from '../../screens/retro/list/RetroOverviewScreen';
import ActionItemsScreen from '../../screens/retro/detail/ActionItemsScreen';
import {themeColors} from '../../styles/theme';
import {useColorScheme} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export default function HomeNav() {
  const scheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: themeColors.violet700}}
      activeColor={themeColors.violet200}
      inactiveColor={themeColors.violet100}>
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
        name="Aktuelle Maßnahmen"
        component={ActionItemsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="clock" color={color} size={26} />
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
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
