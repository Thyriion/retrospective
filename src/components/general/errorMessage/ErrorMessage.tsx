import React from 'react';
import {Text} from 'react-native-paper';
import {errorTextStyles} from '../../../styles/formStyles/errortextStyles';

const ErrorText = ({message}) => {
  return <Text style={errorTextStyles.errorText}>{message}</Text>;
};

export default ErrorText;
