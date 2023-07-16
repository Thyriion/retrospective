import React from 'react';
import {useAppDispatch} from '../../../hooks/redux/hooks';
import CustomView from '../../../components/general/view/View';
import {assignTeamToUser} from '../../../services/auth/assignTeam';
import {useRoute} from '@react-navigation/native';
import {loginUser} from '../../../services/auth/loginUser';
import {login} from '../../../redux/reducers/userSlice';
import ClickableCard from '../../../components/general/card/ClickableCard';

const ChooseTeamScreen = () => {
  const dispatch = useAppDispatch();

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
    assignTeamToUser(team, userData).then(() => {
      loginUser(userData.email, userData.password);
      dispatch(login());
    });
  };
  return (
    <CustomView>
      <ClickableCard text="Team Artemis" onPress={handleArtemisTeamClick} />
      <ClickableCard text="Team Otten" onPress={handleOttenTeamClick} />
    </CustomView>
  );
};

export default ChooseTeamScreen;
