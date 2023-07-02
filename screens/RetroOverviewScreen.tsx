import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const RetroOverviewScreen = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <Text>RetroOverviewScreen</Text>
    </View>
  );
};

export default RetroOverviewScreen;
