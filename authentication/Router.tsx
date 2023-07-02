import {View, Text, Alert, Button} from 'react-native';
import React from 'react';
import {useAuth0} from 'react-native-auth0';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../screens/SettingsScreen';
import RetroOverviewScreen from '../screens/RetroOverviewScreen';
import ActionItemsScreen from '../screens/ActionItemsScreen';

const Tab = createMaterialBottomTabNavigator();

const Router = () => {
  const {authorize, clearSession, user, getCredentials, error} = useAuth0();
  const onLogin = async () => {
    await authorize({scope: 'openid profile email'});
    const {accessToken} = await getCredentials();
    Alert.alert('AccessToken: ' + accessToken);
  };
  const {colors} = useTheme();

  const loggedIn = user !== undefined && user !== null;

  // const onLogout = async () => {
  //   await clearSession({federated: true}, {localStorageOnly: false});
  // };

  return (
    <>
      {loggedIn && (
        <Button onPress={onLogin} title={loggedIn ? 'Log Out' : 'Log In'} />
      )}
      {!loggedIn && (
        <Tab.Navigator
          initialRouteName="Home"
          barStyle={{backgroundColor: colors.primaryContainer}}
          activeColor={colors.onPrimary}
          inactiveColor={colors.primary}>
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
      )}
    </>
  );
};

export default Router;
