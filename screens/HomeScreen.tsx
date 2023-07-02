/* eslint-disable prettier/prettier */
import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PaperProvider, useTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {Dark, Light} from '../theme/theme';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from './SettingsScreen';
import RetroOverviewScreen from './RetroOverviewScreen';
import ActionItemsScreen from './ActionItemsScreen';

const HomeScreen = () => {
  const {colors} = useTheme();

  return (
    <View>
      <Text>Bla</Text>
    </View>
  );
};
export default HomeScreen;
