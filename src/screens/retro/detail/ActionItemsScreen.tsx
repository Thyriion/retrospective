import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const ActionItemsScreen = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <Text>ActionItemsScreen</Text>
    </View>
  );
};

export default ActionItemsScreen;
