import React from 'react';
import {Button} from 'react-native-paper';
import {themeColors} from '../../../styles/theme';

type GeneralButtonProps = {
  text: string;
  onPress: () => void;
};

const GeneralButton = ({text, onPress}: GeneralButtonProps) => {
  return (
    <Button
      onPress={onPress}
      buttonColor={themeColors.violet500}
      textColor={themeColors.gray100}
      rippleColor={themeColors.violet800}
      style={{
        width: 150,
        marginTop: 10,
      }}>
      {text}
    </Button>
  );
};

export default GeneralButton;
