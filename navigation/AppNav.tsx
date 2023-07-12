import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {AuthContext} from '../context/AuthContext';
import {themeColors} from '../styles';

const AppNav = () => {
  const {user} = useContext(AuthContext);
  const themeColor = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      backgroundColor: themeColors.gray900,
    },
  };
  return (
    <NavigationContainer theme={themeColor}>
      {user && <AppStack />}
      {!user && <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
