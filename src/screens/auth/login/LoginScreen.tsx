import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {loginUser} from '../../../services/auth/loginUser';
import {useAppDispatch} from '../../../hooks/redux/hooks';
import {login} from '../../../redux/reducers/userSlice';
import CustomView from '../../../components/general/view/View';
import CustomTextInput from '../../../components/general/textinput/TextInput';
import ErrorText from '../../../components/general/errorMessage/ErrorMessage';
import FormButton from '../../../components/general/button/FormButton';

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

  const dispatch = useAppDispatch();

  const onSubmit = async userData => {
    await loginUser(userData.email, userData.password).then(user => {
      if (user) {
        dispatch(login());
      }
    });
  };

  return (
    <CustomView>
      <Controller
        control={control}
        name="email"
        render={({field: {onChange, value, onBlur}}) => (
          <CustomTextInput
            placeholder="email@example.com"
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value, onBlur}}) => (
          <CustomTextInput
            placeholder="Passwort"
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
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
        render={({message}) => <ErrorText message={message} />}
      />
      <FormButton text="Einloggen" onPress={handleSubmit(onSubmit)} />
      <FormButton
        text="Registrieren"
        onPress={() => navigation.navigate('Registrieren')}
      />
    </CustomView>
  );
};

export default LoginScreen;
