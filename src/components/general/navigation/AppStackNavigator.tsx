import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {themeColors} from '../../../styles/theme';

const AppStackNavigator = ({children}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: themeColors.violet700},
        headerTintColor: themeColors.green100,
      }}>
      {children}
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
