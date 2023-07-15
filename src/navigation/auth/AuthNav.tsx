import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {themeColors} from '../../../styles';
import {useColorScheme} from 'react-native';
import LoginScreen from '../../screens/auth/login/LoginScreen';
import SignUpScreen from '../../screens/auth/register/SignUpScreen';

const Stack = createStackNavigator();

const AuthNav = () => {
  const scheme = useColorScheme();
  const headerStyleBackgroundColor =
    scheme === 'dark' ? themeColors.violet700 : themeColors.violet300;
  const headerTintColor =
    scheme === 'dark' ? themeColors.violet100 : themeColors.violet900;
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerStyle: {
          backgroundColor: headerStyleBackgroundColor,
          shadowColor: themeColors.violet800,
        },
        headerTintColor: headerTintColor,
      }}>
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;
