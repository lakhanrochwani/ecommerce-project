import React,{useState} from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.scss';

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    }

    const handleChange = e => {
        setEmail(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} label='email' handleChange={handleChange} required/>
                <FormInput name='password' type='password' value={password} label='password' handleChange={handleChange} required/>
                <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form'>SIGN IN </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '}
                        SIGN IN WITH GOOGLE{' '} 
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
