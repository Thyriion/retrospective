import React, {useState} from 'react';
import {useAppDispatch} from '../../../hooks/redux/hooks';
import CustomView from '../../../components/general/view/View';
import {useRoute} from '@react-navigation/native';
import ClickableCard from '../../../components/general/card/ClickableCard';
import LoadingCircle from '../../../components/general/loadingCircle/LoadingCircle';

const ChooseTeamScreen = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const route = useRoute();
    // @ts-ignore // Ignoring error because userData may not be defined
    const userData = route.params?.userData;

    const handleArtemisTeamClick = () => {
        handleTeamClick('Artemis');
    };

    const handleOttenTeamClick = () => {
        handleTeamClick('Otten');
    };

    const handleTeamClick = team => {
        setLoading(true);

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
                    <ClickableCard text="Team Artemis" onPress={handleArtemisTeamClick}/>
                    <ClickableCard text="Team Otten" onPress={handleOttenTeamClick}/>
                </CustomView>
            )}
        </>
    );
};

export default ChooseTeamScreen;
