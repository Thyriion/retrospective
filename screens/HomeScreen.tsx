/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useContext} from 'react';
import {Button, useTheme} from 'react-native-paper';
import {logOut} from '../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../context/AuthContext';

const HomeScreen = () => {
  const {colors} = useTheme();

  const {logout} = useContext(AuthContext);

  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <Button
        onPress={logout}
        buttonColor={colors.primary}
        textColor={colors.secondary}
        rippleColor={colors.onPrimary}>
        Blub
      </Button>
    </View>
  );
};
export default HomeScreen;
