import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../actions/userAction';

const EditUserInfos = ({ setIsEditing }) => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.user.userProfile);

  const [userName, setUserName] = useState(userProfile.userName);
  const [isEmpty, setIsEmpty] = useState(false); 

  const handleSave = async () => {
    if (userName) {
      dispatch(updateUserName(userName));
      setIsEditing(false);
    } else {
      setIsEmpty(true);
    }
  };

  let errorMessage = null;

  if (isEmpty) {
    errorMessage = <p className="error-edit">{"The username can't be empty"}</p>;
  }

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
      {errorMessage}
      <div className="buttons-form">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditUserInfos;
