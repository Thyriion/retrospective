import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNav from '../home/HomeNav';
import AuthNav from '../auth/AuthNav';
import {useAppSelector} from '../../hooks/redux/hooks';
import {RootState} from '../../redux/store';

const MainNav = () => {
  const user = useAppSelector((state: RootState) => state.users.value);

  return (
    <NavigationContainer>
      {user && <HomeNav />}
      {!user && <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;
