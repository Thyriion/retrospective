import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import React, {useContext, useState} from 'react';
import {Button, useTheme} from 'react-native-paper';
import {Controller, useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {AuthContext} from '../context/AuthContext';

const LoginForm = ({navigation}) => {
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
  const {user, login} = useContext(AuthContext);

  const {colors} = useTheme();
  const onSubmit = userData => {
    login(userData.email, userData.password);
  };

  const styles = StyleSheet.create({
    textInput: {
      backgroundColor: colors.primary,
      padding: 10,
      marginVertical: 5,
      color: '#000',
      width: 300,
      height: 35,
    },
    errorMessage: {
      backgroundColor: 'red',
      padding: 10,
      color: 'black',
    },
  });

  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: colors.background,
          alignItems: 'center',
        }}>
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
          buttonColor={colors.primary}
          textColor="#f5f5f5"
          rippleColor={colors.onPrimary}
          style={{width: 150, marginTop: 20}}>
          Einloggen
        </Button>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: colors.secondary,
            marginTop: 20,
          }}>
          Registrieren
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
