import {FirebaseError} from '../../enum/FirebaseErrorEnum';

type FirebaseErrorService = {
    getError: (string) => string
};

const getError = (errorCode: string): string => {
    let message = '';
    if (errorCode === FirebaseError.WrongPassword) {
        message = 'Falsches Passwort!';
    }

    if (errorCode === FirebaseError.TooManyRequests) {
        message = 'Zu viele Anfragen. Versuche es später erneut!';
    }

    if (errorCode === FirebaseError.UserNotFound) {
        message = 'Die Mail oder das Passwort ist falsch!';
    }

    if (errorCode === FirebaseError.EmailAlreadyUsed) {
        message = 'Die Mailadresse wird bereits verwendet!';
    }

    if (errorCode === FirebaseError.InvalidEmail) {
        message = 'Ungültige Mailadresse!';
    }

    if (errorCode === FirebaseError.WeakPassword) {
        message = 'Verwende ein stärkeres Passwort!';
    }

    return message;
};

export const FirebaseErrorService: FirebaseErrorService = {
    getError,
};
