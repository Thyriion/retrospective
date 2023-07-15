import {View, Text, StyleSheet, TextInput, useColorScheme} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {Controller, useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {themeColors} from '../../../../styles';
import {loginUser} from '../../../services/auth/loginUser';
import {useAppDispatch} from '../../../hooks/redux/hooks';
import {login} from '../../../redux/reducers/userSlice';

const LoginScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const scheme = useColorScheme();
  const dispatch = useAppDispatch();

  const onSubmit = async userData => {
    await loginUser(userData.email, userData.password).then(user => {
      if (user) {
        dispatch(login());
      }
    });
  };

  const styles = StyleSheet.create({
    textInput: {
      backgroundColor: themeColors.violet500,
      paddingLeft: 10,
      marginVertical: 5,
      color: themeColors.violet100,
      width: 300,
      height: 35,
      borderRadius: 5,
    },
    errorMessage: {
      backgroundColor: themeColors.red500,
      padding: 10,
      color: themeColors.gray100,
      borderRadius: 50,
    },
    background: {
      backgroundColor:
        scheme === 'dark' ? themeColors.gray900 : themeColors.gray100,
    },
  });

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        styles.background,
      ]}>
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
          styles.background,
        ]}>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value, onBlur}}) => (
            <TextInput
              placeholder="email@example.com"
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              style={styles.textInput}
              placeholderTextColor={themeColors.violet200}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value, onBlur}}) => (
            <TextInput
              placeholder="Passwort"
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              style={styles.textInput}
              placeholderTextColor={themeColors.violet200}
              textContentType="password"
              secureTextEntry={true}
            />
          )}
          rules={{
            required: {
              value: true,
              message: 'Das Feld ist ein Pflichtfeld!',
            },
          }}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({message}) => (
            <Text style={styles.errorMessage}>{message}</Text>
          )}
        />

        <Button
          onPress={handleSubmit(onSubmit)}
          buttonColor={themeColors.violet500}
          textColor={themeColors.violet100}
          rippleColor={themeColors.violet300}
          style={{width: 150, marginTop: 20}}>
          Einloggen
        </Button>
      </View>
      <Button
        onPress={() => navigation.navigate('SignUp')}
        buttonColor={themeColors.violet500}
        textColor={themeColors.violet100}
        rippleColor={themeColors.violet300}
        style={{width: 150, marginTop: 10}}>
        Registrieren
      </Button>
    </View>
  );
};

export default LoginScreen;
