import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }

}

export const loginWithEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async () => {

    return await FirebaseAuth.signOut()
}

export const updateDisplayName = async ({ displayName }) => {

    try {
        
        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const updatephotoURL = async ({ photoURL }) => {

    try {
        
        await updateProfile( FirebaseAuth.currentUser, { photoURL });

        return {
            ok: true,
            photoURL
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}