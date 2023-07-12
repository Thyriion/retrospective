import React, {createContext, useEffect, useState} from 'react';
import {logIn, logOut} from '../lib/supabase';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {getItem} = useAsyncStorage('user');
  useEffect(() => {
    getItem().then(data => setUser(data));
  }, []);

  const login = (userEmail: string, userPassword: string) => {
    logIn(userEmail, userPassword).then(data => {
      if (data.length) {
        setUser(data);
      }
    });
  };

  const logout = () => {
    logOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
