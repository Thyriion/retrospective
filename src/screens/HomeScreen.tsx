/* eslint-disable prettier/prettier */
import React from 'react';
import {logoutUser} from '../services/auth/logoutUser';
import {useAppDispatch} from '../hooks/redux/hooks';
import {logout} from '../redux/reducers/userSlice';
import CustomView from '../components/general/view/View';
import GeneralButton from '../components/general/button/GeneralButton';

const HomeScreen = () => {
    const dispatch = useAppDispatch();

    const handleLogOut = async () => {
        await logoutUser();
        dispatch(logout());
    };

    return (
        <CustomView>
            <GeneralButton onPress={handleLogOut} text="Logout"/>
        </CustomView>
    );
};
export default HomeScreen;
