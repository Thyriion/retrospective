import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {themeColors} from '../../../styles/theme';

const LoadingCircle = () => {
  return (
    <ActivityIndicator
      size="large"
      style={{
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        alignContent: 'center',
      }}
      color={themeColors.violet200}
    />
  );
};

export default LoadingCircle;
