import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import CustomView from '../../components/general/view/View';

const SettingsScreen = () => {
  const {colors} = useTheme();
  return (
    <CustomView>
      <Text>SettingsScreen</Text>
    </CustomView>
  );
};

export default SettingsScreen;
