import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import {createStackNavigator} from '@react-navigation/stack';
import {themeColors} from '../styles';
import {useColorScheme} from 'react-native';

const Stack = createStackNavigator();

const AuthStack = () => {
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
      <Stack.Screen name="LogIn" component={LoginForm} />
      <Stack.Screen name="SignUp" component={SignUpForm} />
    </Stack.Navigator>
  );
};

export default AuthStack;
