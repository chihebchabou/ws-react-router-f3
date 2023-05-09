import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../../users';

const User = () => {
  const { login } = useParams();
  const navigate = useNavigate();

  const user = users.find(el => el.login === login);

  console.log(user);

  if (!user) {
    return <div className="container">User not Found</div>;
  }

  const handleClick = e => navigate('/users');

  return (
    <div className="container">
      <div className="card" style={{ width: '25%' }}>
        <img src={user.avatar_url} alt="avatar" className="round-img" />
        <h3>{user.login}</h3>
        <button className="btn btn-primary" onClick={handleClick}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default User;
