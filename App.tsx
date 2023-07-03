/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Dark, Light} from './theme/theme';
import {useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Auth0Provider} from 'react-native-auth0';
import LogInScreen from './screens/LogInScreen';

function App(): JSX.Element {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? Dark : Light;

  return (
    <Auth0Provider
      domain={'dev-1v7tlrecsuifiwei.us.auth0.com'}
      clientId={'iUfFXDryXO6zZJnPdO85AE5tHqy5bT9t'}>
      <PaperProvider theme={theme}>
        <LogInScreen />
      </PaperProvider>
    </Auth0Provider>
  );
}
export default App;
