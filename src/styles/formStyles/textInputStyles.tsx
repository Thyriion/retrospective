import {StyleSheet} from 'react-native';
import {themeColors} from '../theme';

export const textInputStyles = StyleSheet.create({
  textInput: {
    backgroundColor: themeColors.gray700,
    width: 300,
    borderRadius: 5,
    marginVertical: 5,
    paddingLeft: 5,
    color: themeColors.gray100
  },
  textInputPlaceholder: {
    color: themeColors.gray800
  }
});
