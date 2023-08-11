import AsyncStorage from '@react-native-async-storage/async-storage';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type AuthService = {
    loginUser: (userEmail: string, userPassword: string) => Promise<FirebaseAuthTypes.UserCredential>;
    logoutUser: () => Promise<void>;
};

async function loginUser(
    userEmail: string,
    userPassword: string,
): Promise<FirebaseAuthTypes.UserCredential> {
    return auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
}

async function logoutUser(): Promise<void> {
    auth()
        .signOut()
        .then(async () => {
            await AsyncStorage.removeItem('usertoken');
            console.log('User logged out!');
        })
        .catch(error => {
            console.error(error);
        })
}

export const AuthService: AuthService = {
    loginUser,
    logoutUser
}
