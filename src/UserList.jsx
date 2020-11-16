import React from 'react';
import UserCard from './Components/UserCard';
import PropTypes from 'prop-types';

function UserList(props) {
  return (
    <div className="UserList">
      {props.userList.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          login={user.login}
          avatar_url={user.avatar_url}
        />
      ))}
    </div>
  );
}

UserList.propTypes = {
  userList: PropTypes.arrayOf(
    PropTypes.shape ({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default UserList;