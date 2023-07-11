import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
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
  );
};

export default AuthStack;
