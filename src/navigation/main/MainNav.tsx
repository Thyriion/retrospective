import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNav from '../home/HomeNav';
import AuthNav from '../auth/AuthNav';
import {useAppDispatch, useAppSelector} from '../../hooks/redux/hooks';
import {RootState} from '../../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../../redux/reducers/userSlice';
import LoadingCircle from '../../components/general/loadingCircle/LoadingCircle';
import CustomView from '../../components/general/view/View';

const MainNav = () => {
  const user = useAppSelector((state: RootState) => state.users.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    AsyncStorage.getItem('user').then(userData => {
      if (userData?.length) {
        dispatch(login());
      }
    });
  }, []);

  return (
    <>
      <NavigationContainer>
        {user && <HomeNav />}
        {!user && <AuthNav />}
      </NavigationContainer>
    </>
  );
};

export default MainNav;
