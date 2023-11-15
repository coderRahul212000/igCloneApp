import React from 'react';

const User = ({ username, onSignOut }) => {
  return (
    <div className="user">
      <p>Welcome, {username}!</p>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
};

export default User;
