import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {themeColors} from '../../../styles';
import HomeNav from '../home/HomeNav';
import AuthNav from '../auth/AuthNav';
import {useAppSelector} from '../../hooks/redux/hooks';
import {RootState} from '../../redux/store';

const MainNav = () => {
  const user = useAppSelector((state: RootState) => state.users.value);
  const themeColor = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      backgroundColor: themeColors.gray900,
    },
  };
  return (
    <NavigationContainer theme={themeColor}>
      {user && <HomeNav />}
      {!user && <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;
