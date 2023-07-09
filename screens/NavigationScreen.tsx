import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import RetroOverviewScreen from './RetroOverviewScreen';
import ActionItemsScreen from './ActionItemsScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';
const Tab = createMaterialBottomTabNavigator();
const NavigationScreen = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{backgroundColor: theme.colors.primaryContainer}}
        activeColor={theme.colors.onSecondary}
        inactiveColor={theme.colors.secondary}>
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
    </NavigationContainer>
  );
};

export default NavigationScreen;
