import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../../hooks/redux/hooks';
import {logout} from '../../redux/reducers/userSlice';

export async function logoutUser(): Promise<boolean> {
  try {
    await AsyncStorage.removeItem('user');
  } catch (error) {
    console.error(error);
    return false;
  }
  return true;
}
