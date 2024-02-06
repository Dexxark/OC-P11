import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userAction';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password, rememberMe, navigate));
  };

  const loginError = useSelector((state) => state.user.loginError);
  let errorMessage = null;

  if (loginError) {
    errorMessage = <p className="error-sign">{loginError}</p>;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input type="text" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorMessage}
          <button className="sign-in-button" type="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
