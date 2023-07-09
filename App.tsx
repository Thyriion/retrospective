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
import LogInScreen from './screens/LogInScreen';

function App(): JSX.Element {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? Dark : Light;
  return (
    <PaperProvider theme={theme}>
      <LogInScreen />
    </PaperProvider>
  );
}
export default App;
