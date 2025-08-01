import {  useState } from "react";
import {SignInContainer, Title } from './sign-in.styled-components';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firbase.utils';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const[formFields, setFormFields] = useState(defaultFormFields);
    
    const {displayName,email,password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try { const {user} = await signInAuthUserWithEmailAndPassword (email, password);
    }
    catch(error) {
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
              <label className='details-title'>Email</label>
              <input className='email'  required onChange={handleChange} type='email' name='email' value={email}></input>

              <label className='details-title'>Password</label>
              <input className='password' required onChange={handleChange} type='password' name='password' value={password}></input>
            <button className='button'  type='submit'>Sign In</button>
            </form>
        </SignInContainer>
  )
}

export default SignInForm
