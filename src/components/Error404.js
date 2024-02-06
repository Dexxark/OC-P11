import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="error404">
      <h1>Error 404</h1>
      <p>Oops ! The page you are requesting does not exist.</p>
      <NavLink to="/" className="error404-return">Return to home page</NavLink>
    </div>
  );
};

export default Error404;
