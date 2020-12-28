import { takeLatest, call, all, put } from 'redux-saga/effects';
import {auth, handleUserProfile, getCurrentUser, GoogleProvider } from './../../firebase/utils';
import userTypes from './user.types';
import { signInSuccess, signOutUserSuccess, userError, resetPasswordSuccess } from './user.actions';
import { handleResetPasswordAPI } from './user.helpers';

export function* getSnapshotFromUserAuth(user, additionalData={}) {
    try {
            const userRef = yield call(handleUserProfile, { userAuth: user, additionalData });
            const snapshot = yield userRef.get();
            yield put (
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
            )
    } catch(err) {
        // console.log(err);
    }
}

export function* emailSignIn({ payload: { email, password }}) {
    try {
            const { user } = yield auth.signInWithEmailAndPassword(email, password);
            yield getSnapshotFromUserAuth(user)
            // yield auth.signInWithEmailAndPassword(email, password); // not updating the store

        } catch(err) {
            // console.log(err)
        }

}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch(err) {
        // console.log(err)
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(
            signOutUserSuccess()
        )
    } catch(err) {
        // console.log(err);
    }
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser)
}

export function* signUpUser({
    payload: {
        displayName,
        email,
        password,
        confirmPassword 
    }
}) {
    if(password !== confirmPassword) {
        const err = ['Password don\'t match'];
        yield put(
            userError(err)
        );
        return; // not to run(proceed) 'try'
        // dispatch({
        //     type: userTypes.SIGN_UP_ERROR,
        //     payload: err
        // })
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const additionalData = { displayName };
        yield getSnapshotFromUserAuth(user, additionalData)
        // yield call(handleUserProfile, { userAuth: user, additionalData: { displayName } }); // passing {initialdata}
        // dispatch({
        //     type: userTypes.SIGN_UP_SUCCESS,
        //     payload: true
        // })
        // reset();
        // props.history.push('/')

    } catch(err) {
        console.log(err)
    }

}

export function* onSignUpUserStart() {
    yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser)
}

// export function* onSignOutUserSuccess() {
//     yield takeLatest(userTypes.SIGN_OUT_USER_SUCCESS, signOutUser)
// }

export function* resetPassword({ payload: { email }}) {
    try {  
        yield call(handleResetPasswordAPI, email);
        yield put(
            resetPasswordSuccess()
        );
            } catch (err) {
                yield put(
                    userError(err)
                )
                // console.log(err)
            }
}

export function* onResetPasswordStart() {
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword)
}

export default function* userSagas() {
    yield all([
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutUserStart),
        call(onSignUpUserStart),
        call(onResetPasswordStart)
    ])
}