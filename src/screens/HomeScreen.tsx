/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {logoutUser} from '../services/auth/logoutUser';
import {useAppDispatch} from '../hooks/redux/hooks';
import {logout} from '../redux/reducers/userSlice';

const HomeScreen = () => {
  const {colors} = useTheme();
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    await logoutUser();
    dispatch(logout());
  };

  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <Button
        onPress={handleLogOut}
        buttonColor={colors.primary}
        textColor={colors.secondary}
        rippleColor={colors.onPrimary}>
        Blub
      </Button>
    </View>
  );
};
export default HomeScreen;
