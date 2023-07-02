/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import {Dark, Light} from './theme/theme';
import {useColorScheme} from 'react-native';
import RetroOverviewScreen from './screens/RetroOverviewScreen';
import ActionItemsScreen from './screens/ActionItemsScreen';
import {PaperProvider} from 'react-native-paper';
const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {
  const scheme = useColorScheme();

  const theme = scheme === 'dark' ? Dark : Light;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="Home"
          barStyle={{backgroundColor: theme.colors.primaryContainer}}
          activeColor={theme.colors.onPrimary}
          inactiveColor={theme.colors.primary}>
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
    </PaperProvider>
  );
}
export default App;
