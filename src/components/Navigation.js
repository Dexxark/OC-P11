import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../actions/userAction';
import { logout } from '../actions/userAction';
import argentBankLogo from '../images/argentBankLogo.webp';

const Navigation = () => {
  const tokenLocalStorage = localStorage.getItem('token');
  const tokenSessionStorage = sessionStorage.getItem('token');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch(logout());
    navigate('/');
  };

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const userProfile = useSelector((state) => state.user.userProfile);

  const token = tokenLocalStorage || tokenSessionStorage;

  if (token) {
    return (
      <nav className='main-nav'>
        <NavLink to='/' className='main-nav-logo'>
          <img src={argentBankLogo} alt='Argent Bank Logo' className='main-nav-logo-image' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
        <div className='navbar_loginSuccess'>
          <NavLink to='/user' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>
            {userProfile.userName}
          </NavLink>
          <NavLink to='/' className='main-nav-item' onClick={handleLogout}>
            <i className='fa fa-sign-out'></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className='main-nav'>
        <NavLink to='/' className='main-nav-logo'>
          <img src={argentBankLogo} alt='Argent Bank Logo' className='main-nav-logo-image' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to='/login' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    );
  }
};

export default Navigation;

