import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/login/LoginScreen';
import SignUpScreen from '../../screens/auth/register/SignUpScreen';
import AppStackNavigator from '../../components/general/navigation/AppStackNavigator';
import ChooseTeamScreen from '../../screens/auth/register/ChooseTeamScreen';

const Stack = createStackNavigator();

const AuthNav = () => {
  return (
    <AppStackNavigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registrieren" component={SignUpScreen} />
      <Stack.Screen name="Teamwahl" component={ChooseTeamScreen} />
    </AppStackNavigator>
  );
};

export default AuthNav;
