import React from 'react';
import UserItem from './UserItem';

const Users = ({ users }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
      }}
    >
      {users.map(user => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
