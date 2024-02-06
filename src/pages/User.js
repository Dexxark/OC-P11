import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WelcomeUser from '../components/WelcomeUser';
import Account from '../components/Account';

const User = () => {
  return (
    <div className='page_account'>
      <Navigation/>
      <main className="main bg-dark">
        <WelcomeUser />
        <Account accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" accountAmountDescription="Available Balance"/>
        <Account accountTitle="Argent Bank Savings (x6712)" accountAmount="$10,928.42" accountAmountDescription="Available Balance"/>
        <Account accountTitle="Argent Bank Credit Card (x8349)" accountAmount="$184.30" accountAmountDescription="Current Balance" />
      </main>
      <Footer />
    </div>
  );
};

export default User;