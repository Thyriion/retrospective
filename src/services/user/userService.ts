import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type UserService = {
    createUser: (
        userEmail: string,
        userPassword: string
    ) => Promise<FirebaseAuthTypes.UserCredential>;
    assignTeamToUser: (
        team: string
    ) => Promise<void>;
}

async function createUser(
    userEmail: string,
    userPassword: string
): Promise<FirebaseAuthTypes.UserCredential> {
    return auth()
        .createUserWithEmailAndPassword(userEmail, userPassword);
}

async function assignTeamToUser(
    team: string
): Promise<void> {
    const userUid = auth().currentUser?.uid;
    firestore()
        .collection('User')
        .add({
            userid: userUid,
            team: team
        })
        .then(() => {
            console.log('Team zum User hinzugefügt')
        })
}

const UserService: UserService = {
    createUser,
    assignTeamToUser
}

export default UserService;