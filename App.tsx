/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Dark, Light} from './theme/theme';
import {useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {AuthProvider} from './context/AuthContext';
import AppNav from './navigation/AppNav';
import {styles} from './styles';

function App(): JSX.Element {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? styles.dark : styles.light;

  return (
    <PaperProvider>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </PaperProvider>
  );
}
export default App;
