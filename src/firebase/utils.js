import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();  // firebase library
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async ({ userAuth, additionalData }) => {
    if(!userAuth) return;
    const { uid } = userAuth; // user's id

    const userRef = firestore.doc(`users/${uid}`); // this is a path of the doc
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const timestamp = new Date();
        const userRoles = ['user'];
        try {
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                userRoles,
                ...additionalData
            })
        } catch(err) {
            // console.log(err)
        }
    }

    return userRef;

}

export const getCurrentUser = () => {
    return new Promise(( resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth); // userAuth obj
        }, reject)
    })
}