import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {useAppDispatch} from '../../../hooks/redux/hooks';
import {login} from '../../../redux/reducers/userSlice';
import CustomView from '../../../components/general/view/View';
import CustomTextInput from '../../../components/general/textinput/TextInput';
import ErrorText from '../../../components/general/errorMessage/ErrorMessage';
import GeneralButton from '../../../components/general/button/GeneralButton';
import LoadingCircle from '../../../components/general/loadingCircle/LoadingCircle';
import {AuthService} from "../../../services/auth/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    const [loading, setLoading] = useState(false);

    const dispatch = useAppDispatch();

    const onSubmit = async userData => {
        setLoading(true);
        await AuthService.loginUser(userData.email, userData.password)
        const userToken = await AsyncStorage.getItem('usertoken');
        if (userToken) {
            dispatch(login());
        }
        setLoading(false);
    };

    return (
        <>
            {loading && (
                <CustomView>
                    <LoadingCircle/>
                </CustomView>
            )}

            {!loading && (
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
                    <GeneralButton text="Einloggen" onPress={handleSubmit(onSubmit)}/>
                    <GeneralButton
                        text="Registrieren"
                        onPress={() => navigation.navigate('Registrieren')}
                    />
                </CustomView>
            )}
        </>
    );
};

export default LoginScreen;
