/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  console.warn('test');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;
