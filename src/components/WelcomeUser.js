import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../actions/userAction';
import EditUserInfos from './EditUserInfos'; 

const WelcomeUser = () => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false); 

  const userProfile = useSelector((state) => state.user.userProfile);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (isEditing) {
    return (
      <div className="header">
        <EditUserInfos setIsEditing={setIsEditing} /> 
      </div>
    );
  } else {
    return (
      <div className="header">
        <h1>Welcome back<br />{userProfile.userName} !</h1>
        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
      </div>
    );
  }
};

export default WelcomeUser;
