import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {AuthContext} from '../context/AuthContext';

const AppNav = () => {
  const {user} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user && <AppStack />}
      {!user && <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
