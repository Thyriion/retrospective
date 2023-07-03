/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {useAuth0} from 'react-native-auth0';

const HomeScreen = () => {
  const {colors} = useTheme();

  const {clearSession, clearCredentials} = useAuth0();

  const onLogout = async () => {
    try {
      await clearCredentials();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <Button
        onPress={onLogout}
        buttonColor={colors.primary}
        textColor={colors.onPrimaryContainer}
        rippleColor={colors.onPrimary}>
        Blub
      </Button>
    </View>
  );
};
export default HomeScreen;
