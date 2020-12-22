import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { resetAllAuthForms, signInUser, signInWithGoogle } from './../../redux/User/user.actions';

import './styles.scss';
// import Buttons from './../forms/Button';
// import { signInWithGoogle } from './../../firebase/utils';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const mapState = ({ user }) => ({
    signInSuccess: user.signInSuccess
})

const SignIn = props => {
    const { signInSuccess } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(signInSuccess) {
            resetForm();
            dispatch(resetAllAuthForms());
            props.history.push('/');
        }

    }, [signInSuccess]) // whenever the value of signInSuccess changes, gonna be updated  

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit  = async e => {
        e.preventDefault();
        dispatch(signInUser({ email, password }))
        // resetForm();
        // props.history.push('/');

    }

    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogle());
    }

     {
        const configAuthWrapper = {
            headline: 'LogIn'
        }

        return(
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                    <form onSubmit={handleSubmit}>

                        <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                        />

                        <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                        />

                        <Button type="submit">
                            LogIn
                        </Button>

                        <div className="socialSingnin">
                            <div className="row">
                                <Button onClick={handleGoogleSignIn}>
                                    Sign in with Google
                                </Button>
                            </div>
                        </div>

                        <div className="links">
                            <Link to="/recovery">
                                Reset password
                            </Link>
                        </div>
                    </form>
                </div>
            </AuthWrapper>
        )

    }
}

export default withRouter(SignIn);