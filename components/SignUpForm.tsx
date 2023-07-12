import {Text, View, Alert, StyleSheet, useColorScheme} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useTheme, Button, TextInput} from 'react-native-paper';
import {ErrorMessage} from '@hookform/error-message';
import {createUser} from '../lib/supabase';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {themeColors} from '../styles';

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const {colors} = useTheme();
  const {user, login} = useContext(AuthContext);

  const scheme = useColorScheme();

  const onSubmit = userData => {
    createUser(userData.username, userData.email, userData.password);
    login(userData.email, userData.password);
  };

  const styles = StyleSheet.create({
    textInput: {
      backgroundColor: themeColors.violet500,
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
      <Controller
        control={control}
        name="username"
        render={({field: {onChange, value, onBlur}}) => (
          <TextInput
            placeholder="Benutzername"
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            style={styles.textInput}
            placeholderTextColor="#C0C0C0"
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
        name="username"
        render={({message}) => (
          <Text style={styles.errorMessage}>{message}</Text>
        )}
      />
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
            placeholderTextColor="#C0C0C0"
          />
        )}
        rules={{
          required: {
            value: true,
            message: 'Das Feld ist ein Pflichtfeld!',
          },
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Keine gültige E-Mail',
          },
        }}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({message}) => (
          <Text style={styles.errorMessage}>{message}</Text>
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
            placeholderTextColor="#C0C0C0"
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
        Sign Up
      </Button>
    </View>
  );
};

export default SignUpForm;
