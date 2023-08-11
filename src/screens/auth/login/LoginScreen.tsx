import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux/hooks';
import {login} from '../../../redux/reducers/userSlice';
import CustomView from '../../../components/general/view/View';
import CustomTextInput from '../../../components/general/textinput/TextInput';
import ErrorText from '../../../components/general/errorMessage/ErrorMessage';
import GeneralButton from '../../../components/general/button/GeneralButton';
import LoadingCircle from '../../../components/general/loadingCircle/LoadingCircle';
import {AuthService} from "../../../services/auth/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {showError} from "../../../redux/reducers/errorSlice";
import {RootState} from "../../../redux/store";
import ErrorCard from "../../../components/general/errorMessage/ErrorCard";
import {FirebaseError} from "../../../enum/FirebaseErrorEnum";
import {FirebaseErrorService} from "../../../services/error/firebaseErrorService";

const LoginScreen = ({navigation}) => {
    const errorReduce = useAppSelector((state: RootState) => state.error);
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
        AuthService.loginUser(userData.email, userData.password)
            .then(async (user) => {
                dispatch(showError({showError: false, errorMessage: ''}));
                const token = await user.user.getIdToken();
                await AsyncStorage.setItem('usertoken', token);
                dispatch(login());
            })
            .catch((error) => {
                dispatch(showError({showError: true, errorMessage: FirebaseErrorService.getError(error.code)}));
            });
        setLoading(false);
    };

    return (
        <CustomView>
            {errorReduce.showError &&
                <ErrorCard errorMessage={errorReduce.errorMessage}/>

            }
            {loading && (
                <LoadingCircle/>
            )}

            {!loading && <>
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
            </>
            }
        </CustomView>
    );
};

export default LoginScreen;
