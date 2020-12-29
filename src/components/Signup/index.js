import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUpUserStart } from './../../redux/User/user.actions';
import './styles.scss';

// import { auth, handleUserProfile } from './../../firebase/utils';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
})

const Signup = props => {
    const dispatch = useDispatch();
    const history = useHistory(); // create an instance
    const { currentUser, userErr } = useSelector(mapState);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(currentUser) {
            reset();
            history.push('/');
        }
    }, [currentUser])

    useEffect(() => {
        if(Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);
        }
    }, [userErr])

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }));
        // think about validation

        // if(password !== confirmPassword) {
        //     const err = ['Password don\'t match'];
        //     setErrors(err);
        //     return;
        // }

        // try {

        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);

        //     await handleUserProfile(user, { displayName }); // passing {initialdata}
        //     reset();
        //     props.history.push('/')

        // } catch(err) {
        //     // console.log(err)
        // }
    }

   {

        // const { displayName, email, password, confirmPassword, errors } = this.state;

        const configAuthWrapper = {
            headline: 'Registration'
        }

        return (
            <AuthWrapper {...configAuthWrapper}>

                    <div className="formWrap">

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return(
                                    <li key={index} >
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                        
                    <form onSubmit={handleFormSubmit}>
                        <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full Name"
                        handleChange={e => setDisplayName(e.target.value)}
                        />

                        <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}                        />

                        <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                        />

                        <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        handleChange={e => setConfirmPassword(e.target.value)}
                        />

                        <Button 
                        type="submit"
                        >
                            Register
                        </Button>

                    </form>
                    </div>
                </AuthWrapper>
        )
    }
}

export default Signup;