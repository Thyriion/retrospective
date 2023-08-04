import auth from '@react-native-firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserService = {
    createUser: (
        userEmail: string,
        userPassword: string
    ) => Promise<void>;

}

async function createUser(
    userEmail: string,
    userPassword: string
) {
    auth()
        .createUserWithEmailAndPassword(userEmail, userPassword)
        .then(async (userData) => {
            const token = await userData.user.getIdToken();
            await AsyncStorage.setItem('usertoken', token);
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        })
}

const UserService: UserService = {
    createUser
}

export default UserService;