import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useAuth0} from 'react-native-auth0';
import NavigationScreen from './NavigationScreen';
import {ActivityIndicator, Button, useTheme} from 'react-native-paper';

const LogInScreen = () => {
  const {authorize, clearSession, user, getCredentials, error} = useAuth0();
  const [loading, setLoading] = useState(false);
  const loggedIn = user !== undefined && user !== null;
  const theme = useTheme();

  const onPress = async () => {
    try {
      setLoading(true);
      await authorize();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {!loggedIn && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
          }}>
          {loading && <ActivityIndicator size="large" />}
          <View style={{width: 150, marginTop: 20}}>
            <Button
              onPress={onPress}
              buttonColor={theme.colors.primary}
              textColor={theme.colors.onPrimaryContainer}
              rippleColor={theme.colors.onPrimary}>
              Log In
            </Button>
          </View>
        </View>
      )}
      {loggedIn && <NavigationScreen />}
    </>
  );
};

export default LogInScreen;
