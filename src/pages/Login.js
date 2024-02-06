import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';

const Login = () => {
  return (
    <div className='page_login'>
      <Navigation/>
      <SignIn/>
      <Footer/>
    </div>
  );
};

export default Login;