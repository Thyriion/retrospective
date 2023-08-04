import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from "@react-native-firebase/auth";

type AuthService = {
    loginUser: (userEmail: string, userPassword: string) => Promise<void>;
    logoutUser: () => Promise<void>;
};

async function loginUser(
    userEmail: string,
    userPassword: string,
): Promise<void> {
    auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then(async userCredentials => {
            const token = await userCredentials.user.getIdToken();
            await AsyncStorage.setItem('usertoken', token);
        })
        .catch(error => {
            console.error(error);
        })
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