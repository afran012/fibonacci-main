import { getAuth, signInWithPopup } from 'firebase/auth';
import { facebook } from '../../firebaseconfig';
import { loginSincrono } from './loginSincrono';

 const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
            .then((result) => {
                const user = result.user;
                dispatch(loginSincrono(user.uid, user.displayName))
            })
    }
}

export default loginFacebook;