import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../actions/userAction';

const EditUserInfos = ({ setIsEditing }) => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.user.userProfile);

  const [userName, setUserName] = useState(userProfile.userName);

  const handleSave = async () => {
    if (userName !== '') {
      dispatch(updateUserName(userName));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="edit-user-infos">
      <h1>Edit user infos</h1>
      <div>
        <label htmlFor="userName">User Name :</label>
        <input type="text" id="userName" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="firstName">First Name :</label>
        <input type="text" id="firstName" value={userProfile.firstName} className='disabled' disabled/>
      </div>
      <div>
        <label htmlFor="lastName">Last Name :</label>
        <input type="text" id="lastName" value={userProfile.lastName} className='disabled' disabled/>
      </div>
      <div className="buttons-form">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditUserInfos;
