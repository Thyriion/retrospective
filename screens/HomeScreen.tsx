/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from 'react-native-paper';

const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <Text style={{}}>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;
