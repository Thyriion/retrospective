import {Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomView from '../../../components/general/view/View';
import {getTeamByLoggedInUser} from "../../../services/auth/getUser";

const RetroOverviewScreen = () => {
    const [team, setTeam] = useState('');

    useEffect(() => {
        const getTeam = async () => {
            setTeam(await getTeamByLoggedInUser(98));
        }

        getTeam();
    }, [])

    
    return (
      <CustomView>
        <Text></Text>
      </CustomView>
    );
};

export default RetroOverviewScreen;
