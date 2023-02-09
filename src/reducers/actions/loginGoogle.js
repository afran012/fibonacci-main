import { getAuth, signInWithPopup } from 'firebase/auth'
import { google } from '../../firebaseconfig'
import { loginSincrono } from './loginSincrono'

 const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))
            })
    }
}

export default loginGoogle;