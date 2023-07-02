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
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import Router from './authentication/Router';

function App(): JSX.Element {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? Dark : Light;
  return (
    <Auth0Provider
      domain={'dev-1v7tlrecsuifiwei.us.auth0.com'}
      clientId={'iUfFXDryXO6zZJnPdO85AE5tHqy5bT9t'}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PaperProvider>
    </Auth0Provider>
  );
}
export default App;
