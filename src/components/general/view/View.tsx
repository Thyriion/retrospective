import {View} from 'react-native';
import React from 'react';
import {viewStyles} from '../../../styles/generalStyles/viewStyles';

const CustomView = ({children}) => {
  return <View style={viewStyles.view}>{children}</View>;
};

export default CustomView;
