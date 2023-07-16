import {StyleSheet} from 'react-native';
import {themeColors} from '../theme';

export const errorTextStyles = StyleSheet.create({
  errorText: {
    backgroundColor: themeColors.red500,
    width: 300,
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
  },
});
