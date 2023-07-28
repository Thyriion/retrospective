import {TextInput} from 'react-native';
import React from 'react';
import {textInputStyles} from '../../../styles/formStyles/textInputStyles';

type TextInputProps = {
  placeholder: string;
  value: string;
  onBlur: () => void;
  onChangeText: (value: string) => void;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'password'
    | undefined;
  secureTextEntry?: boolean;
};

const CustomTextInput = ({
  placeholder,
  value,
  onBlur,
  onChangeText,
  textContentType,
  secureTextEntry,
}: TextInputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChangeText={onChangeText}
      style={textInputStyles.textInput}
      textContentType={textContentType}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={textInputStyles.textInputPlaceholder.color}
    />
  );
};

export default CustomTextInput;
