
import {useState} from 'react';
import FormInputs from '../../component/form-input/form-input';
import Button from '../../component/button/button-components';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firbase.utils';



import { SignUpContainer, Title, ButtonContainer} from './sign-up.styled-components';


const defaultFormFields = {
    userName: '',
    email: '',
    password: '',
    confirmPassword:'',
};


const SignUpForm = () => {
const[formFields, setFormFields] = useState(defaultFormFields);
const  {userName,email,password, confirmPassword} = formFields;

const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
 const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
        alert('password do not match');
        return;
    }

    try{
        const {user} = await createAuthUserWithEmailAndPassword(
            email,
            password
        );

        await createUserDocumentFromAuth(user, {userName});
        console.log(user)
        resetFormFields();
        
    } catch (error){
        if (error.code === 'auth/email-already-in-use'){
            alert('Cannot create user, email already in use');
            }else {
                console.log('user creation encountered and error', error);
            }
    }
 } 

    const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields,[name]:value});
    }


return (
     <SignUpContainer>
            <Title>Todo Now</Title>
            <span>Create a new account here</span>
            <form >
              <FormInputs
               required onChange={handleChange} 
               label='userName'
               type='string' 
               name='userName' 
               value={userName}
                />

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

              <FormInputs 
              required onChange={handleChange} 
              label='confirmPassword'
              type='password' 
              name='confirmPassword' 
              value={confirmPassword}
              />
              <ButtonContainer>
                <Button type='submit'>Sign Up</Button>
             </ButtonContainer>
            </form>
        </SignUpContainer>
)
}

export default SignUpForm; 