import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';
import HomeScreen from '../../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../../screens/profile/SettingsScreen';
import RetroOverviewScreen from '../../screens/retro/list/RetroOverviewScreen';
import ActionItemsScreen from '../../screens/retro/detail/ActionItemsScreen';
import {styles, themeColors} from '../../../styles';
import {useColorScheme} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export default function HomeNav() {
  const scheme = useColorScheme();

  const styles = StyleSheet.create({
    barStyle: {
      backgroundColor:
        scheme === 'dark' ? themeColors.violet700 : themeColors.violet200,
    },
  });

  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={styles.barStyle}
      activeColor={
        scheme === 'dark' ? themeColors.violet200 : themeColors.violet800
      }
      inactiveColor={
        scheme === 'dark' ? themeColors.violet100 : themeColors.violet600
      }>
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
