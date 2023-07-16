import {Text} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import CustomView from '../../../components/general/view/View';

const ActionItemsScreen = () => {
  const {colors} = useTheme();
  return (
    <CustomView>
      <Text>ActionItemsScreen</Text>
    </CustomView>
  );
};

export default ActionItemsScreen;
