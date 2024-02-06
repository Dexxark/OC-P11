import React from 'react';
import Error404 from '../components/Error404';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page404 = () => {
  return (
    <div>
      <Navigation/>
      <Error404/>
      <Footer/>
    </div>
  );
};

export default Page404;