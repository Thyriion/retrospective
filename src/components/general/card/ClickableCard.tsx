import {View, Text} from 'react-native';
import React from 'react';
import {cardStyles} from '../../../styles/generalStyles/cardStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

type ClickableCardProps = {
  text: string;
  onPress: () => void;
};

const ClickableCard = ({text, onPress}: ClickableCardProps) => {
  return (
    <View>
      <TouchableOpacity
        style={cardStyles.clickableCard}
        onPress={onPress}
        activeOpacity={0.5}>
        <Text style={cardStyles.cardText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClickableCard;
