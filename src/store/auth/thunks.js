
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, updateDisplayName, updatephotoURL } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        if ( !result.ok ) return dispatch( logout( result.errorMessage) );

        dispatch( login( result ));

    }
}

export const startLogout = () => {

    return async (dispatch) => {

        await logoutFirebase()
        dispatch(logout())
    }
}

export const startUpdateDisplayName = ({ displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await updateDisplayName({ displayName });
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
        dispatch( login( result ));
       
    }
}
export const startUpdatePhoto = ({ photoURL }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await updatephotoURL({  photoURL });
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ));
       
    }
}