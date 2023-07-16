import {useForm, Controller} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {createUser} from '../../../services/auth/createUser';
import CustomView from '../../../components/general/view/View';
import CustomTextInput from '../../../components/general/textinput/TextInput';
import FormButton from '../../../components/general/button/FormButton';
import ErrorText from '../../../components/general/errorMessage/ErrorMessage';
import {useState} from 'react';

const SignUpScreen = ({navigation}) => {

  const [error, setError] = useState(false);

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

  const onSubmit = userData => {
    createUser(userData.username, userData.email, userData.password).then(
      user => {
        if (user) {
          setError(false);
          navigation.navigate('Teamwahl', {
            userData: userData,
          });
        } else {
          setError(true);
        }
      },
    );
  };

  return (
    <CustomView>
      <Controller
        control={control}
        name="username"
        render={({field: {onChange, value, onBlur}}) => (
          <CustomTextInput
            placeholder="Benutzername"
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
        name="username"
        render={({message}) => <ErrorText message={message} />}
      />
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
        render={({message}) => <ErrorText message={message} />}
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
        render={({message}) => <ErrorText message={message} />}
      />
      {error && (
        <ErrorText message="Die Mailadresse wird bereits verwendet. Benutze eine andere!" />
      )}

      <FormButton text="Registrieren" onPress={handleSubmit(onSubmit)} />
    </CustomView>
  );
};

export default SignUpScreen;
