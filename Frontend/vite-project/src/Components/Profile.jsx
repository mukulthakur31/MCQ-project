import React, { useContext } from 'react';
import { Context } from '../main';
import './Profile.css'

function Profile() {
  const { user } = useContext(Context);

  return (
    <div className="profile-container">
      <h1 className="profile-heading">User Profile</h1>
      <div className="profile-info">
        <h1 className="label">Name:</h1>
        <p className="value">{user?.username}</p>
      </div>
      <div className="profile-info">
        <h1 className="label">Role:</h1>
        <p className="value">{user?.roles}</p>
      </div>
    </div>
  );
}

export default Profile;
