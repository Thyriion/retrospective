import {Controller, useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import CustomView from '../../../components/general/view/View';
import CustomTextInput from '../../../components/general/textinput/TextInput';
import GeneralButton from '../../../components/general/button/GeneralButton';
import ErrorText from '../../../components/general/errorMessage/ErrorMessage';
import React, {useState} from 'react';
import UserService from "../../../services/user/userService";
import {RootState} from "../../../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux/hooks";
import {showError} from "../../../redux/reducers/errorSlice";
import ErrorCard from "../../../components/general/errorMessage/ErrorCard";
import {FirebaseErrorService} from "../../../services/error/firebaseErrorService";

const SignUpScreen = ({navigation}) => {
    const errorReduce = useAppSelector((state: RootState) => state.error);
    const dispatch = useAppDispatch();
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

    const onSubmit = async userData => {

        UserService.createUser(userData.email, userData.password)
            .then(async () => {
                dispatch(showError({showError: false, errorMessage: ''}))
                const token = await userData.user.getIdToken();
                await AsyncStorage.setItem('usertoken', token);
                navigation.navigate('Teamwahl');
            })
            .catch((error) => {
                dispatch(showError({showError: true, errorMessage: FirebaseErrorService.getError(error.code)}))
            });


    };

    return (
        <CustomView>
            {errorReduce.showError &&
                <ErrorCard errorMessage={errorReduce.errorMessage}/>
            }
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

            <GeneralButton text="Registrieren" onPress={handleSubmit(onSubmit)}/>
        </CustomView>
    );
};

export default SignUpScreen;
