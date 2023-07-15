import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const RetroDetailScreen = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <Text>RetroDetailScreen</Text>
    </View>
  );
};

export default RetroDetailScreen;
