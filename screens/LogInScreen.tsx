import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useAuth0} from 'react-native-auth0';
import NavigationScreen from './NavigationScreen';
import {ActivityIndicator, Button, useTheme} from 'react-native-paper';
import SignUpForm from '../components/SignUpForm';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginForm from '../components/LoginForm';

const Stack = createStackNavigator();

const LogInScreen = () => {
  const {colors} = useTheme();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LogIn"
          screenOptions={{
            headerMode: 'screen',
            headerStyle: {
              backgroundColor: colors.primaryContainer,
              borderColor: colors.primary,
              shadowColor: colors.secondaryContainer,
            },
            headerTintColor: colors.secondary,
          }}>
          <Stack.Screen name="LogIn" component={LoginForm} />
          <Stack.Screen name="SignUp" component={SignUpForm} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* {!loggedIn && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
          }}>
          {loading && <ActivityIndicator size="large" />}
          <View style={{width: 150, marginTop: 20}}>
            <Button
              onPress={onPress}
              buttonColor={theme.colors.primary}
              textColor={theme.colors.onPrimaryContainer}
              rippleColor={theme.colors.onPrimary}>
              Log In
            </Button>
          </View>
        </View>
      )}
      {loggedIn && <NavigationScreen />} */}
    </>
  );
};

export default LogInScreen;
