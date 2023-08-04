import {Controller, useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import CustomView from '../../../components/general/view/View';
import CustomTextInput from '../../../components/general/textinput/TextInput';
import GeneralButton from '../../../components/general/button/GeneralButton';
import ErrorText from '../../../components/general/errorMessage/ErrorMessage';
import {useState} from 'react';
import UserService from "../../../services/user/userService";

const SignUpScreen = ({navigation}) => {
    const [error, setError] = useState(false);

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

    const onSubmit = userData => {
        UserService.createUser(userData.email, userData.password)
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
                render={({message}) => <ErrorText message={message}/>}
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
                render={({message}) => <ErrorText message={message}/>}
            />
            {error && (
                <ErrorText message="Die Mailadresse wird bereits verwendet. Benutze eine andere!"/>
            )}

            <GeneralButton text="Registrieren" onPress={handleSubmit(onSubmit)}/>
        </CustomView>
    );
};

export default SignUpScreen;
