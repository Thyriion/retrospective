import {Text} from 'react-native';
import React from 'react';
import CustomView from '../../../components/general/view/View';
import {getTeamByLoggedInUser} from "../../../services/auth/getUser";

const RetroOverviewScreen = () => {
    let teamId;
    getTeamByLoggedInUser(98).then(id => teamId = id);
    console.warn(teamId);
    return (
        <CustomView>
            <Text>RetroOverviewScreen</Text>
        </CustomView>
    );
};

export default RetroOverviewScreen;
