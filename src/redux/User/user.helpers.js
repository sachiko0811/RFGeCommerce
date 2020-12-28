import { auth } from './../../firebase/utils';

export const handleResetPasswordAPI = (email) => {
    const config = {
        url: 'http://localhost:3000/RFGeCommerce/login'  // to return this position correctly is really important
    }
    return new Promise((resolve, reject) => {
         auth.sendPasswordResetEmail(email, config)
                .then(() => {
                    resolve();
                    // dispatch({
                    //     type: userTypes.RESET_PASSWORD_SUCCESS,
                    //     payload: true
                    // })
                })
                .catch(() => {

                    // console.log('Somthing went wrong')
                    const err = ['Email not found. Please try again.'];
                    reject(err);
                    // dispatch({
                    //     type: userTypes.RESET_PASSWORD_ERROR,
                    //     payload: err
                    // })
                    // setErrors(err);
                })
    })
}