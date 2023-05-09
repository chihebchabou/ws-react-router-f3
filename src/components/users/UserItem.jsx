import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <div className="card text-center" style={{ justifySelf: 'center' }}>
      <img src={user.avatar_url} alt="avatar" className="round-img" />
      <h3>{user.login}</h3>
      <div>
        <Link to={`/users/${user.login}`}>More</Link>
      </div>
    </div>
  );
};

export default UserItem;
