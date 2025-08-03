import {  useState } from "react";
import {SignInContainer, Title, ButtonContainer } from './sign-in.styled-components';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firbase.utils';
import FormInputs from "../form-input/form-input";
import Button, {BUTTON_TYPES_CLASSES }  from "../button/button-components";

import {Link } from 'react-router-dom'

import { } from "react-router-dom";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const[formFields, setFormFields] = useState(defaultFormFields);
    
    const {displayName,email,password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

    try {  await signInAuthUserWithEmailAndPassword (email, password);
        }catch(error) {
        switch(error.code){
            case'auth/wrong-password':
                alert('incorrect password for email');
                break;
            case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
            case 'auth/invalid-credential':
                alert('invaild user credential');
                break;
            default:
                console.log(error);

        }
    }
    }
    const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields,[name]:value});
    }


  return (
        <SignInContainer>
            <Title>Todo Now</Title>
            <form onSubmit = {handleSubmit}>
              <FormInputs
               required onChange={handleChange} 
               label='email'
               type='email' 
               name='email' 
               value={email}
                />

              <FormInputs 
              required onChange={handleChange} 
              label='password'
              type='password' 
              name='password' 
              value={password}
              />
              <div>
                <Link to='/signUp'>Register</Link>
              </div>
            <ButtonContainer>
            <Button type='submit'>Sign In</Button>
            <Button buttonType={BUTTON_TYPES_CLASSES.google} type='button' onClick={signInWithGoogle}>Google sign in</Button>
            </ButtonContainer>
            </form>
        </SignInContainer>
  )
}

export default SignInForm
