import {StyleSheet} from 'react-native';
import {themeColors} from '../theme';

export const cardStyles = StyleSheet.create({
  clickableCard: {
    backgroundColor: themeColors.violet500,
    width: 300,
    color: themeColors.gray100,
    borderRadius: 10,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderColor: themeColors.violet300,
    borderWidth: 0.4,
    shadowColor: themeColors.gray200,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    overlayColor: themeColors.blue100,
  },
  cardText: {
    color: themeColors.gray100,
  },
  clickedCard: {
    backgroundColor: themeColors.blue200,
  },
});
