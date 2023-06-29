/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';

const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: colors.text}}>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;
