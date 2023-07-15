/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import MainNav from './navigation/main/MainNav';
import {Provider} from 'react-redux';
import {store} from './redux/store';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Provider store={store}>
        <MainNav />
      </Provider>
    </PaperProvider>
  );
}
export default App;
