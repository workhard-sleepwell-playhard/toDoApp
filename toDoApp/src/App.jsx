import { useState, Fragment} from 'react'
import {Routes, Route } from 'react-router-dom';
import SignInForm from './component/sign-in/sign-in-component';
import SignUpForm from './routes/sign-up/sign-up-components';

import './App.css'

const Home = () => {
  return (
    <Routes>
     <Route index element={<SignInForm/>}/>
     <Route path='signUp' element = {<SignUpForm/>} />
    </Routes>
  )
}

export default Home;
